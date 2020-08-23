var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1870",
        "ok": "1870",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5601",
        "ok": "5601",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4394",
        "ok": "4394",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1164",
        "ok": "1164",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4860",
        "ok": "4860",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5138",
        "ok": "5138",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5454",
        "ok": "5454",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5470",
        "ok": "5470",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 100,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.667",
        "ok": "16.667",
        "ko": "-"
    }
},
contents: {
"req_milimili-player-ba6c7": {
        type: "REQUEST",
        name: "milimili_player_request",
path: "milimili_player_request",
pathFormatted: "req_milimili-player-ba6c7",
stats: {
    "name": "milimili_player_request",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1870",
        "ok": "1870",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5601",
        "ok": "5601",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4394",
        "ok": "4394",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1164",
        "ok": "1164",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4860",
        "ok": "4860",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5138",
        "ok": "5138",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5454",
        "ok": "5454",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5470",
        "ok": "5470",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 100,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.667",
        "ok": "16.667",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
