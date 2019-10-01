var pie = new d3pie("pieChart1", {
	"header": {
		/*"title": {
			"text": "Ward 1",
		//	"fontSize": 34,
			"font": "times new roman"
			"color": "f9f9f9"
		},*/
		"subtitle": {
			"color": "#f9f9f9",
			"fontSize": 10,
			"font": "courier"
		},
		"titleSubtitlePadding": 10
	},
	"footer": {
		"color": "#f9f9f9",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 590,
		"pieInnerRadius": "60%",
		"pieOuterRadius": "92%"
	},
	"data": {
		"sortOrder": "label-asc",
		"content": [
			{
				"label": "0000",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "2300",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "2200",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "2100",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "2000",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1900",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1800",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "1700",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1600",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1500",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1400",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1300",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1200",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1100",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1000",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0900",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0800",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0700",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0600",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0500",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0400",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0300",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "0200",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "0100",
				"value": 10,
				"color": "#eb0808"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "none",
			"pieDistance": 0
		},
		"inner": {
			"format": "label"
		},
		"mainLabel": {
			"color": "#0e0c0c",
			"fontSize": 14
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	},
	"callbacks": {}
});

var pie = new d3pie("pieChart2", {
	"header": {
		/*"title": {
			"text": "Ward 2",
			"fontSize": 34,
			"font": "times new roman"
		},*/
		"subtitle": {
			"color": "#999999",
			"fontSize": 10,
			"font": "courier"
		},
		"titleSubtitlePadding": 10
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 590,
		"pieInnerRadius": "60%",
		"pieOuterRadius": "92%"
	},
	"data": {
		"sortOrder": "label-asc",
		"content": [
			{
				"label": "0000",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "2300",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "2200",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "2100",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "2000",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1900",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1800",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1700",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1600",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1500",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1400",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1300",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1200",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1100",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1000",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0900",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0800",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0700",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0600",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0500",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0400",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0300",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "0200",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0100",
				"value": 10,
				"color": "#f0ee0a"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "none",
			"pieDistance": 0
		},
		"inner": {
			"format": "label"
		},
		"mainLabel": {
			"color": "#0e0c0c",
			"fontSize": 14
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	},
	"callbacks": {}
});

var pie = new d3pie("pieChart3", {
	"header": {
		/*"title": {
			"text": "Ward 3",
			"fontSize": 34,
			"font": "times new roman"
		},*/
		"subtitle": {
			"color": "#999999",
			"fontSize": 10,
			"font": "courier"
		},
		"titleSubtitlePadding": 10
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 590,
		"pieInnerRadius": "60%",
		"pieOuterRadius": "92%"
	},
	"data": {
		"sortOrder": "label-asc",
		"content": [
			{
				"label": "0000",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "2300",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "2200",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "2100",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "2000",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1900",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1800",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1700",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1600",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1500",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1400",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1300",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1200",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1100",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1000",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0900",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0800",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0700",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0600",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0500",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0400",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0300",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0200",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0100",
				"value": 10,
				"color": "#00f02e"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "none",
			"pieDistance": 0
		},
		"inner": {
			"format": "label"
		},
		"mainLabel": {
			"color": "#0e0c0c",
			"fontSize": 14
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	},
	"callbacks": {}
});

var pie = new d3pie("pieChart4", {
	"header": {
		/*"title": {
			"text": "Ward 4",
			"fontSize": 34,
			"font": "times new roman"
		},*/
		"subtitle": {
			"color": "#999999",
			"fontSize": 10,
			"font": "courier"
		},
		"titleSubtitlePadding": 10
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 590,
		"pieInnerRadius": "60%",
		"pieOuterRadius": "92%"
	},
	"data": {
		"sortOrder": "label-asc",
		"content": [
			{
				"label": "0000",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "2300",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "2200",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "2100",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "2000",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "1900",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1800",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1700",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1600",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1500",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1400",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1300",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1200",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1100",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1000",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0900",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0800",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0700",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0600",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0500",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0400",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0300",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0200",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0100",
				"value": 10,
				"color": "#00f02e"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "none",
			"pieDistance": 0
		},
		"inner": {
			"format": "label"
		},
		"mainLabel": {
			"color": "#0e0c0c",
			"fontSize": 14
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	},
	"callbacks": {}
});

var pie = new d3pie("pieChart5", {
	"header": {
		/*"title": {
			"text": "Ward 5",
			"fontSize": 34,
			"font": "times new roman"
		},*/
		"subtitle": {
			"color": "#999999",
			"fontSize": 10,
			"font": "courier"
		},
		"titleSubtitlePadding": 10
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 590,
		"pieInnerRadius": "60%",
		"pieOuterRadius": "92%"
	},
	"data": {
		"sortOrder": "label-asc",
		"content": [
			{
				"label": "0000",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "2300",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "2200",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "2100",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "2000",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "1900",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1800",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "1700",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "1600",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "1500",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "1400",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1300",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1200",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1100",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1000",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0900",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0800",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0700",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0600",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0500",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0400",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0300",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0200",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "0100",
				"value": 10,
				"color": "#f0ee0a"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "none",
			"pieDistance": 0
		},
		"inner": {
			"format": "label"
		},
		"mainLabel": {
			"color": "#0e0c0c",
			"fontSize": 14
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	},
	"callbacks": {}
});

var pie = new d3pie("pieChart6", {
	"header": {
		/*"title": {
			"text": "Ward 6",
			"fontSize": 34,
			"font": "times new roman"
		},*/
		"subtitle": {
			"color": "#999999",
			"fontSize": 10,
			"font": "courier"
		},
		"titleSubtitlePadding": 10
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 590,
		"pieInnerRadius": "60%",
		"pieOuterRadius": "92%"
	},
	"data": {
		"sortOrder": "label-asc",
		"content": [
			{
				"label": "0000",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "2300",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "2200",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "2100",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "2000",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "1900",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "1800",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1700",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1600",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1500",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1400",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1300",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1200",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1100",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1000",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0900",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0800",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0700",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0600",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0500",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0400",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0300",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0200",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0100",
				"value": 10,
				"color": "#00f02e"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "none",
			"pieDistance": 0
		},
		"inner": {
			"format": "label"
		},
		"mainLabel": {
			"color": "#0e0c0c",
			"fontSize": 14
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	},
	"callbacks": {}
});

var pie = new d3pie("pieChart7", {
	"header": {
		/*"title": {
			"text": "Ward 7",
			"fontSize": 34,
			"font": "times new roman"
		},*/
		"subtitle": {
			"color": "#999999",
			"fontSize": 10,
			"font": "courier"
		},
		"titleSubtitlePadding": 10
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 590,
		"pieInnerRadius": "60%",
		"pieOuterRadius": "92%"
	},
	"data": {
		"sortOrder": "label-asc",
		"content": [
			{
				"label": "0000",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "2300",
				"value": 10,
				"color": "#eb0808"
			},
			{
				"label": "2200",
				"value": 10,
				"color": "#eb0808"
			},
			{
				"label": "2100",
				"value": 10,
				"color": "#eb0808"
			},
			{
				"label": "2000",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "1900",
				"value": 10,
				"color": "#eb0808"
			},
			{
				"label": "1800",
				"value": 10,
				"color": "#eb0808"
			},
			{
				"label": "1700",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "1600",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "1500",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "1400",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "1300",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "1200",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "1100",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1000",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0900",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0800",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0700",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0600",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0500",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0400",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0300",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "0200",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "0100",
				"value": 10,
				"color": "#f0ee0a"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "none",
			"pieDistance": 0
		},
		"inner": {
			"format": "label"
		},
		"mainLabel": {
			"color": "#0e0c0c",
			"fontSize": 14
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	},
	"callbacks": {}
});

var pie = new d3pie("pieChart8", {
	"header": {
		/*"title": {
			"text": "Ward 8",
			"fontSize": 34,
			"font": "times new roman"
		},*/
		"subtitle": {
			"color": "#999999",
			"fontSize": 10,
			"font": "courier"
		},
		"titleSubtitlePadding": 10
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 590,
		"pieInnerRadius": "60%",
		"pieOuterRadius": "92%"
	},
	"data": {
		"sortOrder": "label-asc",
		"content": [
			{
				"label": "0000",
				"value": 10,
				"color": "#eb0808"
			},
			{
				"label": "2300",
				"value": 10,
				"color": "#eb0808"
			},
			{
				"label": "2200",
				"value": 10,
				"color": "#eb0808"
			},
			{
				"label": "2100",
				"value": 10,
				"color": "#eb0808"
			},
			{
				"label": "2000",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "1900",
				"value": 10,
				"color": "#eb0808"
			},
			{
				"label": "1800",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "1700",
				"value": 10,
				"color": "#eb0808"
			},
			{
				"label": "1600",
				"value": 10,
				"color": "#eb0808"
			},
			{
				"label": "1500",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "1400",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "1300",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "1200",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "1100",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "1000",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0900",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "0800",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0700",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0600",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0500",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0400",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0300",
				"value": 10,
				"color": "#00f02e"
			},
			{
				"label": "0200",
				"value": 10,
				"color": "#f0ee0a"
			},
			{
				"label": "0100",
				"value": 10,
				"color": "#f0ee0a"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "none",
			"pieDistance": 0
		},
		"inner": {
			"format": "label"
		},
		"mainLabel": {
			"color": "#0e0c0c",
			"fontSize": 14
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	},
	"callbacks": {}
});