var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "LIVING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.15767278360931059,
          "pitch": 0.013365941492995859,
          "rotation": 0,
          "target": "1-family-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-family-living",
      "name": "FAMILY LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.47610494848522933,
          "pitch": 0.09550895257495817,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": 1.510600211538435,
          "pitch": 0.09608877004153982,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.344252276168337,
          "pitch": 0.27470478991036984,
          "rotation": 0,
          "target": "3-wash-unit"
        },
        {
          "yaw": -0.1392949997963715,
          "pitch": 0.07109363376978273,
          "rotation": 0,
          "target": "5-kitchen"
        },
        {
          "yaw": -1.4407483663884904,
          "pitch": 0.03042795139416654,
          "rotation": 0,
          "target": "1-family-living"
        },
        {
          "yaw": 0.9499801209596157,
          "pitch": -0.006904435746605486,
          "rotation": 0.7853981633974483,
          "target": "15-upperliving"
        },
        {
          "yaw": -3.1282991145739967,
          "pitch": -0.01883586348987265,
          "rotation": 0,
          "target": "4-courtyard"
        },
        {
          "yaw": -2.4657343740617765,
          "pitch": 0.07980957995027893,
          "rotation": 0,
          "target": "9-parents-bedroom-entry"
        },
        {
          "yaw": 2.0388560397602804,
          "pitch": 0.15164080639718236,
          "rotation": 0,
          "target": "12-guest-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wash-unit",
      "name": "WASH UNIT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.669248765891396,
          "pitch": 0.13359449119095146,
          "rotation": 1.5707963267948966,
          "target": "5-kitchen"
        },
        {
          "yaw": 3.0173850702627423,
          "pitch": 0.04809588997528991,
          "rotation": 0,
          "target": "1-family-living"
        },
        {
          "yaw": 2.7228781232898225,
          "pitch": 0.24766346108211224,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-courtyard",
      "name": "COURTYARD",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.020399115523082,
          "pitch": 0.021824783515548063,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7194725707619156,
          "pitch": 0.266096782525306,
          "rotation": 0,
          "target": "6-workarea"
        },
        {
          "yaw": -0.020433206802126236,
          "pitch": 0.14011343033647705,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-workarea",
      "name": "WORKAREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4306444791387882,
          "pitch": 0.1088185685076013,
          "rotation": 0,
          "target": "7-laundry-space"
        },
        {
          "yaw": -0.4535887962325891,
          "pitch": 0.1497953998095074,
          "rotation": 0,
          "target": "8-store-room"
        },
        {
          "yaw": -0.023232338003934316,
          "pitch": 0.10727033269574093,
          "rotation": 0,
          "target": "5-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-laundry-space",
      "name": "LAUNDRY SPACE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7266757380256337,
          "pitch": 0.11165397360457696,
          "rotation": 0,
          "target": "6-workarea"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-store-room",
      "name": "STORE ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7341378298810444,
          "pitch": 0.025633060181785794,
          "rotation": 0,
          "target": "6-workarea"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-parents-bedroom-entry",
      "name": "PARENTS BEDROOM ENTRY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.13864857798255947,
          "pitch": 0.07881775010401171,
          "rotation": 0,
          "target": "10-parents-bedroom-"
        },
        {
          "yaw": -2.2891359789437082,
          "pitch": 0.12393928633986029,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": -1.3648979637945633,
          "pitch": 0.06907218681487493,
          "rotation": 0,
          "target": "11-parents-bedroom-toilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-parents-bedroom-",
      "name": "PARENTS BEDROOM ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07788108258254667,
          "pitch": 0.0082726009030889,
          "rotation": 0,
          "target": "9-parents-bedroom-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-parents-bedroom-toilet",
      "name": "PARENTS BEDROOM TOILET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9221742062138114,
          "pitch": 0.041719129825317225,
          "rotation": 0,
          "target": "9-parents-bedroom-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-guest-bedroom",
      "name": "GUEST BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.43748649252824023,
          "pitch": 0.035437629077499366,
          "rotation": 0,
          "target": "13-guest-bedroom-dressing"
        },
        {
          "yaw": 1.666528555687849,
          "pitch": 0.19998042249268977,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-guest-bedroom-dressing",
      "name": "GUEST BEDROOM DRESSING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.567528831600864,
        "pitch": -0.029202712979525813,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": -0.7874815236225423,
          "pitch": 0.332113515788242,
          "rotation": 0,
          "target": "14-guest-bedroom-toilet"
        },
        {
          "yaw": -0.19818168550112425,
          "pitch": 0.08056604028659109,
          "rotation": 4.71238898038469,
          "target": "12-guest-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-guest-bedroom-toilet",
      "name": "GUEST BEDROOM TOILET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.72945228323211,
          "pitch": 0.052561318187860806,
          "rotation": 0,
          "target": "13-guest-bedroom-dressing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-upperliving",
      "name": "UPPERLIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.011039453047171577,
        "pitch": 0.027037613637883595,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": 1.2956440511731842,
          "pitch": 0.23552404256993498,
          "rotation": 3.141592653589793,
          "target": "2-dining"
        },
        {
          "yaw": -2.428555074296588,
          "pitch": 0.15514219213208946,
          "rotation": 0,
          "target": "17-ff-master-bedroom-entry"
        },
        {
          "yaw": 1.7888923860050188,
          "pitch": 0.21223246682875363,
          "rotation": 0,
          "target": "19-ff-bedroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5171355199135093,
          "pitch": 0.11506626184963054,
          "title": "OPEN TERRACE",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "16-ff-master-bedroom",
      "name": "FF MASTER BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.06767603222019858,
        "pitch": -0.004867118829920969,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": -1.8565252654601228,
          "pitch": 0.015859413503662267,
          "rotation": 0,
          "target": "17-ff-master-bedroom-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-ff-master-bedroom-entry",
      "name": "FF MASTER BEDROOM ENTRY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.11754258227720626,
        "pitch": 0.02190203473464436,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": 0.5699100141105511,
          "pitch": 0.08952788351630403,
          "rotation": 0,
          "target": "16-ff-master-bedroom"
        },
        {
          "yaw": -1.9098798466885967,
          "pitch": 0.20087117201909876,
          "rotation": 1.5707963267948966,
          "target": "18-ff-master-bedroom-toilet"
        },
        {
          "yaw": -2.4706969724219654,
          "pitch": 0.08640884734363752,
          "rotation": 0,
          "target": "15-upperliving"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-ff-master-bedroom-toilet",
      "name": "FF MASTER BEDROOM TOILET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7268526484210485,
          "pitch": 0.07362558198784974,
          "rotation": 0,
          "target": "17-ff-master-bedroom-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-ff-bedroom",
      "name": "FF BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.046304653624353875,
        "pitch": -0.02676915356456533,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": -0.6281869107704292,
          "pitch": -0.056124212652809646,
          "rotation": 0,
          "target": "20-ff-bedroom-dressing"
        },
        {
          "yaw": 2.0240797384490916,
          "pitch": 0.06454865130608312,
          "rotation": 0,
          "target": "15-upperliving"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-ff-bedroom-dressing",
      "name": "FF BEDROOM DRESSING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.652918333393071,
        "pitch": -0.04449937215927591,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": -1.0505577154226522,
          "pitch": 0.14251080438816466,
          "rotation": 0,
          "target": "21-ff-bedroom-toilet"
        },
        {
          "yaw": -0.32337034055378666,
          "pitch": 0.07159493439574938,
          "rotation": 0,
          "target": "19-ff-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-ff-bedroom-toilet",
      "name": "FF BEDROOM TOILET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6705033981915847,
          "pitch": 0.050226263651667935,
          "rotation": 0,
          "target": "20-ff-bedroom-dressing"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "AMAL K DEV RESIDENCY",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
