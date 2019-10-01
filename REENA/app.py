import os

import numpy as np

import sqlalchemy

# SQL Alchemy
from sqlalchemy import create_engine
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

# PyMySQL 
import pymysql
pymysql.install_as_MySQLdb()

# Config variables
from config import remote_db_endpoint, remote_db_port
from config import remote_dccrime_dbname, remote_dccrime_dbuser, remote_dccrime_dbpwd


# Import Pandas
import pandas as pd
from flask import Flask, jsonify, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


#################################################
# Database Setup
#################################################

# AWS Database Connection
engine = create_engine(f"mysql://{remote_dccrime_dbuser}:{remote_dccrime_dbpwd}@{remote_db_endpoint}:{remote_db_port}/{remote_dccrime_dbname}")
# Create a remote database engine connection
conn = engine.connect()


#FROM JIMMY PROBABLY DELETE
# reflect an existing database into a new model
#Base = automap_base()
# reflect the tables
#Base.prepare(db.engine, reflect=True)

# Save references to each table
#Samples_Metadata = Base.classes.sample_metadata
#Samples = Base.classes.samples



@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")


@app.route("/data")
def crime_data():
    """Return a list of sample names."""
    ward = request.args.get("WARD")
    offense = request.args.get("OFFENSE")
    # Use Pandas to perform the sql query
    if ward=="All" and offense=="All":
        query_all=f"SELECT CCN,CENSUS_TRACT,END_DATE,LATITUDE,LONGITUDE,METHOD,OFFENSE,PSA,REPORT_DAT,SHIFT,START_DATE,WARD FROM crime_incidents_all LIMIT 9000"
    elif ward=="All":
        query_all=f"SELECT CCN,CENSUS_TRACT,END_DATE,LATITUDE,LONGITUDE,METHOD,OFFENSE,PSA,REPORT_DAT,SHIFT,START_DATE,WARD FROM crime_incidents_all WHERE OFFENSE = {offense}"
    elif offense=="All":
        query_all=f"SELECT CCN,CENSUS_TRACT,END_DATE,LATITUDE,LONGITUDE,METHOD,OFFENSE,PSA,REPORT_DAT,SHIFT,START_DATE,WARD FROM crime_incidents_all WHERE WARD ={ward}"
    else:
        query_all = f"SELECT CCN,CENSUS_TRACT,END_DATE,LATITUDE,LONGITUDE,METHOD,OFFENSE,PSA,REPORT_DAT,SHIFT,START_DATE,WARD FROM crime_incidents_all WHERE WARD = {ward} AND OFFENSE = {offense}"
    
    remote_crime_data = pd.read_sql(query_all, conn)
    #print(remote_crime_data.to_dict(orient="records"))
    return(jsonify(remote_crime_data.to_dict(orient="records")))



@app.route("/ward_offense")
def offense_data():
    remote_offense_data=pd.read_sql("SELECT DISTINCT OFFENSE FROM crime_incidents_all",conn)
    offense_dict=remote_offense_data.to_dict(orient="records")
    remote_ward_data = pd.read_sql("SELECT * FROM dc_wards", conn)
    ward_dict=remote_ward_data.to_dict(orient="records")
    result_dict={"ward": ward_dict,"offense":offense_dict}
    return(jsonify(result_dict))

@app.route("/charts_data")
def num_crimes():
    query_all=f"SELECT OFFENSE,END_DATE,WARD FROM crime_incidents_all"
    charts_crime_data = pd.read_sql(query_all, conn)
    #print(remote_crime_data.to_dict(orient="records"))
    return(jsonify(charts_crime_data.to_dict(orient="records")))


@app.route("/ward_data")
def ward_data():
    """Return a list of sample names."""

    # Use Pandas to perform the sql query
    remote_ward_data = pd.read_sql("SELECT * FROM dc_wards", conn)
    #print(remote_crime_data.to_dict(orient="records"))
    return(jsonify(remote_ward_data.to_dict(orient="records")))

#@app.route("/metadata/<sample>")
#def sample_metadata(sample):
#    """Return the MetaData for a given sample."""
#    sel = [
#        Samples_Metadata.sample,
#        Samples_Metadata.ETHNICITY,
#        Samples_Metadata.GENDER,
#        Samples_Metadata.AGE,
#        Samples_Metadata.LOCATION,
#        Samples_Metadata.BBTYPE,
#        Samples_Metadata.WFREQ,
#    ]

#    results = db.session.query(*sel).filter(Samples_Metadata.sample == sample).all()

    # Create a dictionary entry for each row of metadata information
#    sample_metadata = {}
#    for result in results:
#        sample_metadata["sample"] = result[0]
#        sample_metadata["ETHNICITY"] = result[1]
#        sample_metadata["GENDER"] = result[2]
#        sample_metadata["AGE"] = result[3]
#        sample_metadata["LOCATION"] = result[4]
#        sample_metadata["BBTYPE"] = result[5]
#        sample_metadata["WFREQ"] = result[6]

#    print(sample_metadata)
#    return jsonify(sample_metadata)


#@app.route("/type/<ctype>")
#def crimeType(ctype):
    
#    query_all = "SELECT CCN,CENSUS_TRACT,END_DATE,LATITUDE,LONGITUDE,METHOD,OFFENSE,PSA,REPORT_DAT,SHIFT,START_DATE,WARD FROM crime_incidents_all"
#    remote_crime_data = pd.read_sql(query_all, conn)

#    crime_filter = remote_crime_data.loc[remote_crime_data['OFFENSE'] == ctype]

#    return(jsonify(crime_filter.to_dict(orient="records")))

#@app.route("/location/<ward>")
#def wardNumber(ward):
    
#    query_all1 = "SELECT CCN,CENSUS_TRACT,END_DATE,LATITUDE,LONGITUDE,METHOD,OFFENSE,PSA,REPORT_DAT,SHIFT,START_DATE,WARD FROM crime_incidents_all"
#    remote_crime_data1 = pd.read_sql(query_all1, conn)

#    crime_filter1 = remote_crime_data1.loc[remote_crime_data1['WARD'] == int(ward)]

#    return(jsonify(crime_filter1.to_dict(orient="records")))


if __name__ == "__main__":
    app.run()
