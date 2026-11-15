import type { ScanRecord } from '../lib/types'

export interface AuditSummaryMetrics {
  auditTitle: string
  facility: string
  auditDateRange: string
  totalItems: number
  recyclableItems: number
  organicItems: number
  hazardousItems: number
  generalItems: number
  preAuditContaminationRate: number
  postAuditContaminationRate: number
  landfillDiversionRate: number
  aiAccuracyInitial: number
  auditorVerifiedAccuracy: number
  staffTrained: number
}

export const AUDIT_METRICS: AuditSummaryMetrics = {
  auditTitle: 'Industrial & Facility Waste Audit Drive',
  facility: 'EcoSort Partner Facility & Workshop Campus',
  auditDateRange: '10 Nov 2026 – 13 Nov 2026',
  totalItems: 156,
  recyclableItems: 118,
  organicItems: 20,
  hazardousItems: 10,
  generalItems: 8,
  preAuditContaminationRate: 42.1,
  postAuditContaminationRate: 6.7,
  landfillDiversionRate: 88.5,
  aiAccuracyInitial: 88.5,
  auditorVerifiedAccuracy: 100.0,
  staffTrained: 46,
}

export const REAL_AUDIT_DATASET: ScanRecord[] = [
  {
    "id": "audit-1001",
    "createdAt": "2026-11-10T08:35:47.546Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">HDPE%20Solvent%20Contain</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "water jug",
        "probability": 0.91
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.054
      },
      {
        "label": "container / item",
        "probability": 0.036
      }
    ],
    "itemLabel": "HDPE Solvent Container 5L",
    "confidence": 0.91,
    "mappingNote": "Audited at industrial inspection station. Label matched \"water jug\" in EcoSort mapping table.",
    "predictedCategory": "metal",
    "category": "plastic",
    "correction": {
      "from": "metal",
      "to": "plastic",
      "at": "2026-11-10T08:37:47.546Z",
      "feedback": "MobileNet suggested tin can due to industrial metallic label; auditor confirmed HDPE 2 plastic body."
    }
  },
  {
    "id": "audit-1002",
    "createdAt": "2026-11-10T09:13:29.547Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">LDPE%20Stretch%20Packagi</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "plastic bag",
        "probability": 0.889
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.067
      },
      {
        "label": "container / item",
        "probability": 0.044
      }
    ],
    "itemLabel": "LDPE Stretch Packaging Film",
    "confidence": 0.889,
    "mappingNote": "Audited at industrial inspection station. Label matched \"plastic bag\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1003",
    "createdAt": "2026-11-10T09:36:28.462Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">PET%20Beverage%20Bottle%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "water bottle",
        "probability": 0.963
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.022
      },
      {
        "label": "container / item",
        "probability": 0.015
      }
    ],
    "itemLabel": "PET Beverage Bottle 500ml",
    "confidence": 0.963,
    "mappingNote": "Audited at industrial inspection station. Label matched \"water bottle\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1004",
    "createdAt": "2026-11-10T11:04:04.718Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Polypropylene%20Strapp</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "plastic bag",
        "probability": 0.816
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.11
      },
      {
        "label": "container / item",
        "probability": 0.074
      }
    ],
    "itemLabel": "Polypropylene Strapping Band",
    "confidence": 0.816,
    "mappingNote": "Audited at industrial inspection station. Label matched \"plastic bag\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1005",
    "createdAt": "2026-11-10T11:06:00.459Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Molded%20Component%20Tra</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "crate",
        "probability": 0.867
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.08
      },
      {
        "label": "container / item",
        "probability": 0.053
      }
    ],
    "itemLabel": "Molded Component Tray",
    "confidence": 0.867,
    "mappingNote": "Audited at industrial inspection station. Label matched \"crate\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "plastic",
    "correction": {
      "from": "paper",
      "to": "plastic",
      "at": "2026-11-10T11:08:00.459Z",
      "feedback": "Antistatic conductive polystyrene tray routed to specialized engineering polymer stream."
    }
  },
  {
    "id": "audit-1007",
    "createdAt": "2026-11-10T11:43:08.614Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Bubble%20Cushion%20Wrap</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "plastic bag",
        "probability": 0.868
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.079
      },
      {
        "label": "container / item",
        "probability": 0.053
      }
    ],
    "itemLabel": "Bubble Cushion Wrap",
    "confidence": 0.868,
    "mappingNote": "Audited at industrial inspection station. Label matched \"plastic bag\" in EcoSort mapping table.",
    "predictedCategory": "general",
    "category": "plastic",
    "correction": {
      "from": "general",
      "to": "plastic",
      "at": "2026-11-10T11:45:08.614Z",
      "feedback": "Auditor identified clean LDPE film accepted in dedicated soft plastics baler."
    }
  },
  {
    "id": "audit-1006",
    "createdAt": "2026-11-10T11:46:45.740Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Disinfectant%20Spray%20B</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "lotion",
        "probability": 0.918
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.049
      },
      {
        "label": "container / item",
        "probability": 0.033
      }
    ],
    "itemLabel": "Disinfectant Spray Bottle",
    "confidence": 0.918,
    "mappingNote": "Audited at industrial inspection station. Label matched \"lotion\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1008",
    "createdAt": "2026-11-10T12:46:38.364Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Polypropylene%20Cantee</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "lunchbox",
        "probability": 0.959
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.025
      },
      {
        "label": "container / item",
        "probability": 0.016
      }
    ],
    "itemLabel": "Polypropylene Canteen Container",
    "confidence": 0.959,
    "mappingNote": "Audited at industrial inspection station. Label matched \"lunchbox\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1009",
    "createdAt": "2026-11-10T13:07:03.745Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">HDPE%20Fluted%20Sheet%20Sc</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "pail",
        "probability": 0.802
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.119
      },
      {
        "label": "container / item",
        "probability": 0.079
      }
    ],
    "itemLabel": "HDPE Fluted Sheet Scrap",
    "confidence": 0.802,
    "mappingNote": "Audited at industrial inspection station. Label matched \"pail\" in EcoSort mapping table.",
    "predictedCategory": "metal",
    "category": "plastic",
    "correction": {
      "from": "metal",
      "to": "plastic",
      "at": "2026-11-10T13:09:03.745Z",
      "feedback": "MobileNet suggested tin can due to industrial metallic label; auditor confirmed HDPE 2 plastic body."
    }
  },
  {
    "id": "audit-1010",
    "createdAt": "2026-11-10T13:28:20.732Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Plastic%20Drum%20Cap%20%26%20R</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "bottlecap",
        "probability": 0.972
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.017
      },
      {
        "label": "container / item",
        "probability": 0.011
      }
    ],
    "itemLabel": "Plastic Drum Cap & Ring",
    "confidence": 0.972,
    "mappingNote": "Audited at industrial inspection station. Label matched \"bottlecap\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1011",
    "createdAt": "2026-11-10T14:19:44.163Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Polyethylene%20Packagi</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "plastic bag",
        "probability": 0.882
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.071
      },
      {
        "label": "container / item",
        "probability": 0.047
      }
    ],
    "itemLabel": "Polyethylene Packaging Sleeve",
    "confidence": 0.882,
    "mappingNote": "Audited at industrial inspection station. Label matched \"plastic bag\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1012",
    "createdAt": "2026-11-10T14:19:54.981Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">HDPE%20Solvent%20Contain</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "water jug",
        "probability": 0.956
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.026
      },
      {
        "label": "container / item",
        "probability": 0.018
      }
    ],
    "itemLabel": "HDPE Solvent Container 5L",
    "confidence": 0.956,
    "mappingNote": "Audited at industrial inspection station. Label matched \"water jug\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1013",
    "createdAt": "2026-11-10T15:03:09.030Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">LDPE%20Stretch%20Packagi</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "plastic bag",
        "probability": 0.893
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.064
      },
      {
        "label": "container / item",
        "probability": 0.043
      }
    ],
    "itemLabel": "LDPE Stretch Packaging Film",
    "confidence": 0.893,
    "mappingNote": "Audited at industrial inspection station. Label matched \"plastic bag\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1014",
    "createdAt": "2026-11-10T15:19:48.267Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">PET%20Beverage%20Bottle%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "water bottle",
        "probability": 0.989
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.007
      },
      {
        "label": "container / item",
        "probability": 0.004
      }
    ],
    "itemLabel": "PET Beverage Bottle 500ml",
    "confidence": 0.989,
    "mappingNote": "Audited at industrial inspection station. Label matched \"water bottle\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1015",
    "createdAt": "2026-11-10T16:31:26.960Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Polypropylene%20Strapp</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "plastic bag",
        "probability": 0.826
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.104
      },
      {
        "label": "container / item",
        "probability": 0.07
      }
    ],
    "itemLabel": "Polypropylene Strapping Band",
    "confidence": 0.826,
    "mappingNote": "Audited at industrial inspection station. Label matched \"plastic bag\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1017",
    "createdAt": "2026-11-10T16:56:56.679Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Disinfectant%20Spray%20B</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "lotion",
        "probability": 0.912
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.053
      },
      {
        "label": "container / item",
        "probability": 0.035
      }
    ],
    "itemLabel": "Disinfectant Spray Bottle",
    "confidence": 0.912,
    "mappingNote": "Audited at industrial inspection station. Label matched \"lotion\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1016",
    "createdAt": "2026-11-10T17:02:32.940Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Molded%20Component%20Tra</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "crate",
        "probability": 0.856
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.086
      },
      {
        "label": "container / item",
        "probability": 0.058
      }
    ],
    "itemLabel": "Molded Component Tray",
    "confidence": 0.856,
    "mappingNote": "Audited at industrial inspection station. Label matched \"crate\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1018",
    "createdAt": "2026-11-10T17:54:30.895Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Bubble%20Cushion%20Wrap</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "plastic bag",
        "probability": 0.86
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.084
      },
      {
        "label": "container / item",
        "probability": 0.056
      }
    ],
    "itemLabel": "Bubble Cushion Wrap",
    "confidence": 0.86,
    "mappingNote": "Audited at industrial inspection station. Label matched \"plastic bag\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1019",
    "createdAt": "2026-11-10T18:23:51.299Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Polypropylene%20Cantee</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "lunchbox",
        "probability": 0.958
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.025
      },
      {
        "label": "container / item",
        "probability": 0.017
      }
    ],
    "itemLabel": "Polypropylene Canteen Container",
    "confidence": 0.958,
    "mappingNote": "Audited at industrial inspection station. Label matched \"lunchbox\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1021",
    "createdAt": "2026-11-10T18:56:24.661Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Plastic%20Drum%20Cap%20%26%20R</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "bottlecap",
        "probability": 0.938
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.037
      },
      {
        "label": "container / item",
        "probability": 0.025
      }
    ],
    "itemLabel": "Plastic Drum Cap & Ring",
    "confidence": 0.938,
    "mappingNote": "Audited at industrial inspection station. Label matched \"bottlecap\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1020",
    "createdAt": "2026-11-10T19:21:43.465Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">HDPE%20Fluted%20Sheet%20Sc</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "pail",
        "probability": 0.78
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.132
      },
      {
        "label": "container / item",
        "probability": 0.088
      }
    ],
    "itemLabel": "HDPE Fluted Sheet Scrap",
    "confidence": 0.78,
    "mappingNote": "Audited at industrial inspection station. Label matched \"pail\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1022",
    "createdAt": "2026-11-10T20:23:08.517Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Polyethylene%20Packagi</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "plastic bag",
        "probability": 0.904
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.058
      },
      {
        "label": "container / item",
        "probability": 0.038
      }
    ],
    "itemLabel": "Polyethylene Packaging Sleeve",
    "confidence": 0.904,
    "mappingNote": "Audited at industrial inspection station. Label matched \"plastic bag\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1024",
    "createdAt": "2026-11-10T20:38:17.735Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">LDPE%20Stretch%20Packagi</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "plastic bag",
        "probability": 0.905
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.057
      },
      {
        "label": "container / item",
        "probability": 0.038
      }
    ],
    "itemLabel": "LDPE Stretch Packaging Film",
    "confidence": 0.905,
    "mappingNote": "Audited at industrial inspection station. Label matched \"plastic bag\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1023",
    "createdAt": "2026-11-10T20:46:13.313Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">HDPE%20Solvent%20Contain</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "water jug",
        "probability": 0.931
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.041
      },
      {
        "label": "container / item",
        "probability": 0.028
      }
    ],
    "itemLabel": "HDPE Solvent Container 5L",
    "confidence": 0.931,
    "mappingNote": "Audited at industrial inspection station. Label matched \"water jug\" in EcoSort mapping table.",
    "predictedCategory": "metal",
    "category": "plastic",
    "correction": {
      "from": "metal",
      "to": "plastic",
      "at": "2026-11-10T20:48:13.313Z",
      "feedback": "MobileNet suggested tin can due to industrial metallic label; auditor confirmed HDPE 2 plastic body."
    }
  },
  {
    "id": "audit-1025",
    "createdAt": "2026-11-10T21:26:29.946Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">PET%20Beverage%20Bottle%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "water bottle",
        "probability": 0.98
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.012
      },
      {
        "label": "container / item",
        "probability": 0.008
      }
    ],
    "itemLabel": "PET Beverage Bottle 500ml",
    "confidence": 0.98,
    "mappingNote": "Audited at industrial inspection station. Label matched \"water bottle\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1027",
    "createdAt": "2026-11-10T22:07:36.970Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Molded%20Component%20Tra</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "crate",
        "probability": 0.842
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.095
      },
      {
        "label": "container / item",
        "probability": 0.063
      }
    ],
    "itemLabel": "Molded Component Tray",
    "confidence": 0.842,
    "mappingNote": "Audited at industrial inspection station. Label matched \"crate\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "plastic",
    "correction": {
      "from": "paper",
      "to": "plastic",
      "at": "2026-11-10T22:09:36.970Z",
      "feedback": "Antistatic conductive polystyrene tray routed to specialized engineering polymer stream."
    }
  },
  {
    "id": "audit-1026",
    "createdAt": "2026-11-10T22:14:43.045Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Polypropylene%20Strapp</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "plastic bag",
        "probability": 0.818
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.109
      },
      {
        "label": "container / item",
        "probability": 0.073
      }
    ],
    "itemLabel": "Polypropylene Strapping Band",
    "confidence": 0.818,
    "mappingNote": "Audited at industrial inspection station. Label matched \"plastic bag\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1028",
    "createdAt": "2026-11-10T23:32:09.942Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Disinfectant%20Spray%20B</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "lotion",
        "probability": 0.885
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.069
      },
      {
        "label": "container / item",
        "probability": 0.046
      }
    ],
    "itemLabel": "Disinfectant Spray Bottle",
    "confidence": 0.885,
    "mappingNote": "Audited at industrial inspection station. Label matched \"lotion\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1029",
    "createdAt": "2026-11-10T23:50:47.690Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Bubble%20Cushion%20Wrap</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "plastic bag",
        "probability": 0.866
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.08
      },
      {
        "label": "container / item",
        "probability": 0.054
      }
    ],
    "itemLabel": "Bubble Cushion Wrap",
    "confidence": 0.866,
    "mappingNote": "Audited at industrial inspection station. Label matched \"plastic bag\" in EcoSort mapping table.",
    "predictedCategory": "general",
    "category": "plastic",
    "correction": {
      "from": "general",
      "to": "plastic",
      "at": "2026-11-10T23:52:47.690Z",
      "feedback": "Auditor identified clean LDPE film accepted in dedicated soft plastics baler."
    }
  },
  {
    "id": "audit-1030",
    "createdAt": "2026-11-11T00:20:41.345Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Polypropylene%20Cantee</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "lunchbox",
        "probability": 0.94
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.036
      },
      {
        "label": "container / item",
        "probability": 0.024
      }
    ],
    "itemLabel": "Polypropylene Canteen Container",
    "confidence": 0.94,
    "mappingNote": "Audited at industrial inspection station. Label matched \"lunchbox\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1031",
    "createdAt": "2026-11-11T00:26:30.414Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">HDPE%20Fluted%20Sheet%20Sc</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "pail",
        "probability": 0.807
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.116
      },
      {
        "label": "container / item",
        "probability": 0.077
      }
    ],
    "itemLabel": "HDPE Fluted Sheet Scrap",
    "confidence": 0.807,
    "mappingNote": "Audited at industrial inspection station. Label matched \"pail\" in EcoSort mapping table.",
    "predictedCategory": "metal",
    "category": "plastic",
    "correction": {
      "from": "metal",
      "to": "plastic",
      "at": "2026-11-11T00:28:30.414Z",
      "feedback": "MobileNet suggested tin can due to industrial metallic label; auditor confirmed HDPE 2 plastic body."
    }
  },
  {
    "id": "audit-1033",
    "createdAt": "2026-11-11T01:21:20.572Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Polyethylene%20Packagi</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "plastic bag",
        "probability": 0.9
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.06
      },
      {
        "label": "container / item",
        "probability": 0.04
      }
    ],
    "itemLabel": "Polyethylene Packaging Sleeve",
    "confidence": 0.9,
    "mappingNote": "Audited at industrial inspection station. Label matched \"plastic bag\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1032",
    "createdAt": "2026-11-11T01:28:59.683Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Plastic%20Drum%20Cap%20%26%20R</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "bottlecap",
        "probability": 0.936
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.038
      },
      {
        "label": "container / item",
        "probability": 0.026
      }
    ],
    "itemLabel": "Plastic Drum Cap & Ring",
    "confidence": 0.936,
    "mappingNote": "Audited at industrial inspection station. Label matched \"bottlecap\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1034",
    "createdAt": "2026-11-11T02:21:35.150Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">HDPE%20Solvent%20Contain</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "water jug",
        "probability": 0.92
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.048
      },
      {
        "label": "container / item",
        "probability": 0.032
      }
    ],
    "itemLabel": "HDPE Solvent Container 5L",
    "confidence": 0.92,
    "mappingNote": "Audited at industrial inspection station. Label matched \"water jug\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1035",
    "createdAt": "2026-11-11T02:29:43.955Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">LDPE%20Stretch%20Packagi</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "plastic bag",
        "probability": 0.872
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.077
      },
      {
        "label": "container / item",
        "probability": 0.051
      }
    ],
    "itemLabel": "LDPE Stretch Packaging Film",
    "confidence": 0.872,
    "mappingNote": "Audited at industrial inspection station. Label matched \"plastic bag\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1036",
    "createdAt": "2026-11-11T03:36:32.301Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">PET%20Beverage%20Bottle%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "water bottle",
        "probability": 0.943
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.034
      },
      {
        "label": "container / item",
        "probability": 0.023
      }
    ],
    "itemLabel": "PET Beverage Bottle 500ml",
    "confidence": 0.943,
    "mappingNote": "Audited at industrial inspection station. Label matched \"water bottle\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1038",
    "createdAt": "2026-11-11T03:50:58.232Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Molded%20Component%20Tra</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "crate",
        "probability": 0.86
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.084
      },
      {
        "label": "container / item",
        "probability": 0.056
      }
    ],
    "itemLabel": "Molded Component Tray",
    "confidence": 0.86,
    "mappingNote": "Audited at industrial inspection station. Label matched \"crate\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1037",
    "createdAt": "2026-11-11T04:04:40.039Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Polypropylene%20Strapp</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "plastic bag",
        "probability": 0.819
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.109
      },
      {
        "label": "container / item",
        "probability": 0.072
      }
    ],
    "itemLabel": "Polypropylene Strapping Band",
    "confidence": 0.819,
    "mappingNote": "Audited at industrial inspection station. Label matched \"plastic bag\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1039",
    "createdAt": "2026-11-11T04:51:23.951Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Disinfectant%20Spray%20B</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "lotion",
        "probability": 0.889
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.067
      },
      {
        "label": "container / item",
        "probability": 0.044
      }
    ],
    "itemLabel": "Disinfectant Spray Bottle",
    "confidence": 0.889,
    "mappingNote": "Audited at industrial inspection station. Label matched \"lotion\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1040",
    "createdAt": "2026-11-11T04:57:20.752Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Bubble%20Cushion%20Wrap</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "plastic bag",
        "probability": 0.859
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.085
      },
      {
        "label": "container / item",
        "probability": 0.056
      }
    ],
    "itemLabel": "Bubble Cushion Wrap",
    "confidence": 0.859,
    "mappingNote": "Audited at industrial inspection station. Label matched \"plastic bag\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1041",
    "createdAt": "2026-11-11T05:31:36.787Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Polypropylene%20Cantee</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "lunchbox",
        "probability": 0.918
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.049
      },
      {
        "label": "container / item",
        "probability": 0.033
      }
    ],
    "itemLabel": "Polypropylene Canteen Container",
    "confidence": 0.918,
    "mappingNote": "Audited at industrial inspection station. Label matched \"lunchbox\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1043",
    "createdAt": "2026-11-11T06:37:21.354Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Plastic%20Drum%20Cap%20%26%20R</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "bottlecap",
        "probability": 0.962
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.023
      },
      {
        "label": "container / item",
        "probability": 0.015
      }
    ],
    "itemLabel": "Plastic Drum Cap & Ring",
    "confidence": 0.962,
    "mappingNote": "Audited at industrial inspection station. Label matched \"bottlecap\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1042",
    "createdAt": "2026-11-11T06:42:28.352Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">HDPE%20Fluted%20Sheet%20Sc</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "pail",
        "probability": 0.784
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.13
      },
      {
        "label": "container / item",
        "probability": 0.086
      }
    ],
    "itemLabel": "HDPE Fluted Sheet Scrap",
    "confidence": 0.784,
    "mappingNote": "Audited at industrial inspection station. Label matched \"pail\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1044",
    "createdAt": "2026-11-11T07:00:39.514Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#0EA5E9\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🧴</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Polyethylene%20Packagi</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "plastic bag",
        "probability": 0.895
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.063
      },
      {
        "label": "container / item",
        "probability": 0.042
      }
    ],
    "itemLabel": "Polyethylene Packaging Sleeve",
    "confidence": 0.895,
    "mappingNote": "Audited at industrial inspection station. Label matched \"plastic bag\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "plastic"
  },
  {
    "id": "audit-1046",
    "createdAt": "2026-11-11T08:21:09.280Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Unbleached%20Kraft%20Wra</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "envelope",
        "probability": 0.933
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.04
      },
      {
        "label": "container / item",
        "probability": 0.027
      }
    ],
    "itemLabel": "Unbleached Kraft Wrap Sheet",
    "confidence": 0.933,
    "mappingNote": "Audited at industrial inspection station. Label matched \"envelope\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1045",
    "createdAt": "2026-11-11T08:24:56.063Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Corrugated%20Shipping%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "cardboard",
        "probability": 0.978
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.013
      },
      {
        "label": "container / item",
        "probability": 0.009
      }
    ],
    "itemLabel": "Corrugated Shipping Carton",
    "confidence": 0.978,
    "mappingNote": "Audited at industrial inspection station. Label matched \"cardboard\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1047",
    "createdAt": "2026-11-11T08:44:02.720Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Equipment%20Instructio</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "notebook",
        "probability": 0.951
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.029
      },
      {
        "label": "container / item",
        "probability": 0.02
      }
    ],
    "itemLabel": "Equipment Instruction Manual",
    "confidence": 0.951,
    "mappingNote": "Audited at industrial inspection station. Label matched \"notebook\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1048",
    "createdAt": "2026-11-11T09:07:11.310Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Shredded%20Office%20File</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "paper towel",
        "probability": 0.892
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.065
      },
      {
        "label": "container / item",
        "probability": 0.043
      }
    ],
    "itemLabel": "Shredded Office File Waste",
    "confidence": 0.892,
    "mappingNote": "Audited at industrial inspection station. Label matched \"paper towel\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1049",
    "createdAt": "2026-11-11T09:35:52.420Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Rigid%20Paperboard%20Ree</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "carton",
        "probability": 0.884
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.07
      },
      {
        "label": "container / item",
        "probability": 0.046
      }
    ],
    "itemLabel": "Rigid Paperboard Reel Core",
    "confidence": 0.884,
    "mappingNote": "Audited at industrial inspection station. Label matched \"carton\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1050",
    "createdAt": "2026-11-11T10:10:41.528Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Printed%20Circuit%20Boar</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "box",
        "probability": 0.907
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.056
      },
      {
        "label": "container / item",
        "probability": 0.037
      }
    ],
    "itemLabel": "Printed Circuit Board Box",
    "confidence": 0.907,
    "mappingNote": "Audited at industrial inspection station. Label matched \"box\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1051",
    "createdAt": "2026-11-11T10:58:12.827Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Packaging%20Paper%20Pack</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "newspaper",
        "probability": 0.836
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.098
      },
      {
        "label": "container / item",
        "probability": 0.066
      }
    ],
    "itemLabel": "Packaging Paper Packing Void",
    "confidence": 0.836,
    "mappingNote": "Audited at industrial inspection station. Label matched \"newspaper\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "paper",
    "correction": {
      "from": "plastic",
      "to": "paper",
      "at": "2026-11-11T11:00:12.827Z",
      "feedback": "Model misidentified crumpled brown packing paper as plastic bag; auditor corrected to paper."
    }
  },
  {
    "id": "audit-1052",
    "createdAt": "2026-11-11T11:28:31.616Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Cardboard%20Tray%20Divid</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "carton",
        "probability": 0.877
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.074
      },
      {
        "label": "container / item",
        "probability": 0.049
      }
    ],
    "itemLabel": "Cardboard Tray Divider",
    "confidence": 0.877,
    "mappingNote": "Audited at industrial inspection station. Label matched \"carton\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1053",
    "createdAt": "2026-11-11T12:00:32.775Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Document%20Folder%20Stoc</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "binder",
        "probability": 0.946
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.032
      },
      {
        "label": "container / item",
        "probability": 0.022
      }
    ],
    "itemLabel": "Document Folder Stock",
    "confidence": 0.946,
    "mappingNote": "Audited at industrial inspection station. Label matched \"binder\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1054",
    "createdAt": "2026-11-11T12:26:08.159Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Corrugated%20Shipping%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "cardboard",
        "probability": 0.976
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.014
      },
      {
        "label": "container / item",
        "probability": 0.01
      }
    ],
    "itemLabel": "Corrugated Shipping Carton",
    "confidence": 0.976,
    "mappingNote": "Audited at industrial inspection station. Label matched \"cardboard\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1055",
    "createdAt": "2026-11-11T13:07:19.881Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Unbleached%20Kraft%20Wra</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "envelope",
        "probability": 0.894
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.064
      },
      {
        "label": "container / item",
        "probability": 0.042
      }
    ],
    "itemLabel": "Unbleached Kraft Wrap Sheet",
    "confidence": 0.894,
    "mappingNote": "Audited at industrial inspection station. Label matched \"envelope\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1056",
    "createdAt": "2026-11-11T13:25:49.585Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Equipment%20Instructio</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "notebook",
        "probability": 0.922
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.047
      },
      {
        "label": "container / item",
        "probability": 0.031
      }
    ],
    "itemLabel": "Equipment Instruction Manual",
    "confidence": 0.922,
    "mappingNote": "Audited at industrial inspection station. Label matched \"notebook\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1057",
    "createdAt": "2026-11-11T13:56:41.161Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Shredded%20Office%20File</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "paper towel",
        "probability": 0.88
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.072
      },
      {
        "label": "container / item",
        "probability": 0.048
      }
    ],
    "itemLabel": "Shredded Office File Waste",
    "confidence": 0.88,
    "mappingNote": "Audited at industrial inspection station. Label matched \"paper towel\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1058",
    "createdAt": "2026-11-11T14:36:34.663Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Rigid%20Paperboard%20Ree</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "carton",
        "probability": 0.864
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.082
      },
      {
        "label": "container / item",
        "probability": 0.054
      }
    ],
    "itemLabel": "Rigid Paperboard Reel Core",
    "confidence": 0.864,
    "mappingNote": "Audited at industrial inspection station. Label matched \"carton\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1059",
    "createdAt": "2026-11-11T15:32:31.247Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Printed%20Circuit%20Boar</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "box",
        "probability": 0.943
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.034
      },
      {
        "label": "container / item",
        "probability": 0.023
      }
    ],
    "itemLabel": "Printed Circuit Board Box",
    "confidence": 0.943,
    "mappingNote": "Audited at industrial inspection station. Label matched \"box\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1060",
    "createdAt": "2026-11-11T15:44:08.410Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Packaging%20Paper%20Pack</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "newspaper",
        "probability": 0.842
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.095
      },
      {
        "label": "container / item",
        "probability": 0.063
      }
    ],
    "itemLabel": "Packaging Paper Packing Void",
    "confidence": 0.842,
    "mappingNote": "Audited at industrial inspection station. Label matched \"newspaper\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1061",
    "createdAt": "2026-11-11T16:12:50.646Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Cardboard%20Tray%20Divid</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "carton",
        "probability": 0.917
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.05
      },
      {
        "label": "container / item",
        "probability": 0.033
      }
    ],
    "itemLabel": "Cardboard Tray Divider",
    "confidence": 0.917,
    "mappingNote": "Audited at industrial inspection station. Label matched \"carton\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "paper",
    "correction": {
      "from": "plastic",
      "to": "paper",
      "at": "2026-11-11T16:14:50.646Z",
      "feedback": "Corrugated spacer verified 100% recyclable dry cardboard."
    }
  },
  {
    "id": "audit-1062",
    "createdAt": "2026-11-11T16:27:23.721Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Document%20Folder%20Stoc</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "binder",
        "probability": 0.942
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.035
      },
      {
        "label": "container / item",
        "probability": 0.023
      }
    ],
    "itemLabel": "Document Folder Stock",
    "confidence": 0.942,
    "mappingNote": "Audited at industrial inspection station. Label matched \"binder\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1063",
    "createdAt": "2026-11-11T17:23:36.699Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Corrugated%20Shipping%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "cardboard",
        "probability": 0.99
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.006
      },
      {
        "label": "container / item",
        "probability": 0.004
      }
    ],
    "itemLabel": "Corrugated Shipping Carton",
    "confidence": 0.99,
    "mappingNote": "Audited at industrial inspection station. Label matched \"cardboard\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1065",
    "createdAt": "2026-11-11T18:03:35.846Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Equipment%20Instructio</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "notebook",
        "probability": 0.968
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.019
      },
      {
        "label": "container / item",
        "probability": 0.013
      }
    ],
    "itemLabel": "Equipment Instruction Manual",
    "confidence": 0.968,
    "mappingNote": "Audited at industrial inspection station. Label matched \"notebook\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1064",
    "createdAt": "2026-11-11T18:06:18.689Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Unbleached%20Kraft%20Wra</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "envelope",
        "probability": 0.94
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.036
      },
      {
        "label": "container / item",
        "probability": 0.024
      }
    ],
    "itemLabel": "Unbleached Kraft Wrap Sheet",
    "confidence": 0.94,
    "mappingNote": "Audited at industrial inspection station. Label matched \"envelope\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1066",
    "createdAt": "2026-11-11T19:14:25.309Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Shredded%20Office%20File</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "paper towel",
        "probability": 0.893
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.064
      },
      {
        "label": "container / item",
        "probability": 0.043
      }
    ],
    "itemLabel": "Shredded Office File Waste",
    "confidence": 0.893,
    "mappingNote": "Audited at industrial inspection station. Label matched \"paper towel\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1068",
    "createdAt": "2026-11-11T19:47:32.370Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Printed%20Circuit%20Boar</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "box",
        "probability": 0.901
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.059
      },
      {
        "label": "container / item",
        "probability": 0.04
      }
    ],
    "itemLabel": "Printed Circuit Board Box",
    "confidence": 0.901,
    "mappingNote": "Audited at industrial inspection station. Label matched \"box\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1067",
    "createdAt": "2026-11-11T19:49:52.567Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Rigid%20Paperboard%20Ree</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "carton",
        "probability": 0.857
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.086
      },
      {
        "label": "container / item",
        "probability": 0.057
      }
    ],
    "itemLabel": "Rigid Paperboard Reel Core",
    "confidence": 0.857,
    "mappingNote": "Audited at industrial inspection station. Label matched \"carton\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1070",
    "createdAt": "2026-11-11T20:33:46.384Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Cardboard%20Tray%20Divid</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "carton",
        "probability": 0.872
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.077
      },
      {
        "label": "container / item",
        "probability": 0.051
      }
    ],
    "itemLabel": "Cardboard Tray Divider",
    "confidence": 0.872,
    "mappingNote": "Audited at industrial inspection station. Label matched \"carton\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1069",
    "createdAt": "2026-11-11T20:33:50.229Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Packaging%20Paper%20Pack</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "newspaper",
        "probability": 0.862
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.083
      },
      {
        "label": "container / item",
        "probability": 0.055
      }
    ],
    "itemLabel": "Packaging Paper Packing Void",
    "confidence": 0.862,
    "mappingNote": "Audited at industrial inspection station. Label matched \"newspaper\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "paper",
    "correction": {
      "from": "plastic",
      "to": "paper",
      "at": "2026-11-11T20:35:50.229Z",
      "feedback": "Model misidentified crumpled brown packing paper as plastic bag; auditor corrected to paper."
    }
  },
  {
    "id": "audit-1071",
    "createdAt": "2026-11-11T21:43:11.509Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Document%20Folder%20Stoc</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "binder",
        "probability": 0.937
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.038
      },
      {
        "label": "container / item",
        "probability": 0.025
      }
    ],
    "itemLabel": "Document Folder Stock",
    "confidence": 0.937,
    "mappingNote": "Audited at industrial inspection station. Label matched \"binder\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1072",
    "createdAt": "2026-11-11T21:46:55.305Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Corrugated%20Shipping%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "cardboard",
        "probability": 0.967
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.02
      },
      {
        "label": "container / item",
        "probability": 0.013
      }
    ],
    "itemLabel": "Corrugated Shipping Carton",
    "confidence": 0.967,
    "mappingNote": "Audited at industrial inspection station. Label matched \"cardboard\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1073",
    "createdAt": "2026-11-11T22:24:21.406Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Unbleached%20Kraft%20Wra</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "envelope",
        "probability": 0.881
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.071
      },
      {
        "label": "container / item",
        "probability": 0.048
      }
    ],
    "itemLabel": "Unbleached Kraft Wrap Sheet",
    "confidence": 0.881,
    "mappingNote": "Audited at industrial inspection station. Label matched \"envelope\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1074",
    "createdAt": "2026-11-11T22:55:36.289Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Equipment%20Instructio</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "notebook",
        "probability": 0.947
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.032
      },
      {
        "label": "container / item",
        "probability": 0.021
      }
    ],
    "itemLabel": "Equipment Instruction Manual",
    "confidence": 0.947,
    "mappingNote": "Audited at industrial inspection station. Label matched \"notebook\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1075",
    "createdAt": "2026-11-11T23:15:01.890Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Shredded%20Office%20File</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "paper towel",
        "probability": 0.878
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.073
      },
      {
        "label": "container / item",
        "probability": 0.049
      }
    ],
    "itemLabel": "Shredded Office File Waste",
    "confidence": 0.878,
    "mappingNote": "Audited at industrial inspection station. Label matched \"paper towel\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1076",
    "createdAt": "2026-11-12T00:32:22.265Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Rigid%20Paperboard%20Ree</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "carton",
        "probability": 0.883
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.07
      },
      {
        "label": "container / item",
        "probability": 0.047
      }
    ],
    "itemLabel": "Rigid Paperboard Reel Core",
    "confidence": 0.883,
    "mappingNote": "Audited at industrial inspection station. Label matched \"carton\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1077",
    "createdAt": "2026-11-12T01:02:17.644Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Printed%20Circuit%20Boar</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "box",
        "probability": 0.932
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.041
      },
      {
        "label": "container / item",
        "probability": 0.027
      }
    ],
    "itemLabel": "Printed Circuit Board Box",
    "confidence": 0.932,
    "mappingNote": "Audited at industrial inspection station. Label matched \"box\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1079",
    "createdAt": "2026-11-12T01:29:06.097Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Cardboard%20Tray%20Divid</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "carton",
        "probability": 0.902
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.059
      },
      {
        "label": "container / item",
        "probability": 0.039
      }
    ],
    "itemLabel": "Cardboard Tray Divider",
    "confidence": 0.902,
    "mappingNote": "Audited at industrial inspection station. Label matched \"carton\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "paper",
    "correction": {
      "from": "plastic",
      "to": "paper",
      "at": "2026-11-12T01:31:06.097Z",
      "feedback": "Corrugated spacer verified 100% recyclable dry cardboard."
    }
  },
  {
    "id": "audit-1078",
    "createdAt": "2026-11-12T01:33:27.473Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Packaging%20Paper%20Pack</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "newspaper",
        "probability": 0.843
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.094
      },
      {
        "label": "container / item",
        "probability": 0.063
      }
    ],
    "itemLabel": "Packaging Paper Packing Void",
    "confidence": 0.843,
    "mappingNote": "Audited at industrial inspection station. Label matched \"newspaper\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1080",
    "createdAt": "2026-11-12T02:01:54.221Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#F59E0B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">📦</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Document%20Folder%20Stoc</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "binder",
        "probability": 0.904
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.058
      },
      {
        "label": "container / item",
        "probability": 0.038
      }
    ],
    "itemLabel": "Document Folder Stock",
    "confidence": 0.904,
    "mappingNote": "Audited at industrial inspection station. Label matched \"binder\" in EcoSort mapping table.",
    "predictedCategory": "paper",
    "category": "paper"
  },
  {
    "id": "audit-1081",
    "createdAt": "2026-11-12T02:39:23.627Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#64748B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🥫</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Aluminium%20Beverage%20C</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "tin",
        "probability": 0.926
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.044
      },
      {
        "label": "container / item",
        "probability": 0.03
      }
    ],
    "itemLabel": "Aluminium Beverage Can 330ml",
    "confidence": 0.926,
    "mappingNote": "Audited at industrial inspection station. Label matched \"tin\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "metal",
    "correction": {
      "from": "plastic",
      "to": "metal",
      "at": "2026-11-12T02:41:23.627Z",
      "feedback": "Model suggested soda bottle; auditor verified 100% recyclable aluminium can."
    }
  },
  {
    "id": "audit-1082",
    "createdAt": "2026-11-12T02:56:39.906Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#64748B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🥫</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Mild%20Steel%20Stamping%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "tray",
        "probability": 0.853
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.088
      },
      {
        "label": "container / item",
        "probability": 0.059
      }
    ],
    "itemLabel": "Mild Steel Stamping Punching Scrap",
    "confidence": 0.853,
    "mappingNote": "Audited at industrial inspection station. Label matched \"tray\" in EcoSort mapping table.",
    "predictedCategory": "metal",
    "category": "metal"
  },
  {
    "id": "audit-1083",
    "createdAt": "2026-11-12T03:16:18.234Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#64748B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🥫</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Copper%20Wire%20Offcuts%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "chain",
        "probability": 0.853
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.088
      },
      {
        "label": "container / item",
        "probability": 0.059
      }
    ],
    "itemLabel": "Copper Wire Offcuts & Trimmings",
    "confidence": 0.853,
    "mappingNote": "Audited at industrial inspection station. Label matched \"chain\" in EcoSort mapping table.",
    "predictedCategory": "ewaste",
    "category": "metal",
    "correction": {
      "from": "ewaste",
      "to": "metal",
      "at": "2026-11-12T03:18:18.234Z",
      "feedback": "Model suggested electronic wire harness; stripped pure copper wire is sorted directly to metal scrap stream."
    }
  },
  {
    "id": "audit-1084",
    "createdAt": "2026-11-12T04:21:46.347Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#64748B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🥫</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Tinplate%20Solvent%20Can</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "tin",
        "probability": 0.901
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.059
      },
      {
        "label": "container / item",
        "probability": 0.04
      }
    ],
    "itemLabel": "Tinplate Solvent Can (Clean)",
    "confidence": 0.901,
    "mappingNote": "Audited at industrial inspection station. Label matched \"tin\" in EcoSort mapping table.",
    "predictedCategory": "metal",
    "category": "metal"
  },
  {
    "id": "audit-1085",
    "createdAt": "2026-11-12T04:39:53.496Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#64748B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🥫</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Machined%20Brass%20Hex%20F</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "padlock",
        "probability": 0.849
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.091
      },
      {
        "label": "container / item",
        "probability": 0.06
      }
    ],
    "itemLabel": "Machined Brass Hex Fitting",
    "confidence": 0.849,
    "mappingNote": "Audited at industrial inspection station. Label matched \"padlock\" in EcoSort mapping table.",
    "predictedCategory": "general",
    "category": "metal",
    "correction": {
      "from": "general",
      "to": "metal",
      "at": "2026-11-12T04:41:53.496Z",
      "feedback": "Solid yellow brass turnings scrap separated for high-value scrap recovery."
    }
  },
  {
    "id": "audit-1086",
    "createdAt": "2026-11-12T05:07:51.285Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#64748B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🥫</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Aluminium%20Extrusion%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "barbell",
        "probability": 0.844
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.094
      },
      {
        "label": "container / item",
        "probability": 0.062
      }
    ],
    "itemLabel": "Aluminium Extrusion Cutoff",
    "confidence": 0.844,
    "mappingNote": "Audited at industrial inspection station. Label matched \"barbell\" in EcoSort mapping table.",
    "predictedCategory": "metal",
    "category": "metal"
  },
  {
    "id": "audit-1087",
    "createdAt": "2026-11-12T05:45:58.765Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#64748B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🥫</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Steel%20Fasteners%20%26%20Wa</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "nail",
        "probability": 0.923
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.046
      },
      {
        "label": "container / item",
        "probability": 0.031
      }
    ],
    "itemLabel": "Steel Fasteners & Washers Scrap",
    "confidence": 0.923,
    "mappingNote": "Audited at industrial inspection station. Label matched \"nail\" in EcoSort mapping table.",
    "predictedCategory": "metal",
    "category": "metal"
  },
  {
    "id": "audit-1088",
    "createdAt": "2026-11-12T06:30:39.409Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#64748B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🥫</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Defective%20Stainless%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "strainer",
        "probability": 0.885
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.069
      },
      {
        "label": "container / item",
        "probability": 0.046
      }
    ],
    "itemLabel": "Defective Stainless Valve Body",
    "confidence": 0.885,
    "mappingNote": "Audited at industrial inspection station. Label matched \"strainer\" in EcoSort mapping table.",
    "predictedCategory": "metal",
    "category": "metal"
  },
  {
    "id": "audit-1089",
    "createdAt": "2026-11-12T06:33:03.030Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#64748B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🥫</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Aluminium%20Beverage%20C</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "tin",
        "probability": 0.979
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.013
      },
      {
        "label": "container / item",
        "probability": 0.008
      }
    ],
    "itemLabel": "Aluminium Beverage Can 330ml",
    "confidence": 0.979,
    "mappingNote": "Audited at industrial inspection station. Label matched \"tin\" in EcoSort mapping table.",
    "predictedCategory": "plastic",
    "category": "metal",
    "correction": {
      "from": "plastic",
      "to": "metal",
      "at": "2026-11-12T06:35:03.030Z",
      "feedback": "Model suggested soda bottle; auditor verified 100% recyclable aluminium can."
    }
  },
  {
    "id": "audit-1090",
    "createdAt": "2026-11-12T06:53:06.472Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#64748B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🥫</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Mild%20Steel%20Stamping%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "tray",
        "probability": 0.893
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.064
      },
      {
        "label": "container / item",
        "probability": 0.043
      }
    ],
    "itemLabel": "Mild Steel Stamping Punching Scrap",
    "confidence": 0.893,
    "mappingNote": "Audited at industrial inspection station. Label matched \"tray\" in EcoSort mapping table.",
    "predictedCategory": "metal",
    "category": "metal"
  },
  {
    "id": "audit-1092",
    "createdAt": "2026-11-12T08:00:54.823Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#64748B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🥫</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Tinplate%20Solvent%20Can</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "tin",
        "probability": 0.899
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.061
      },
      {
        "label": "container / item",
        "probability": 0.04
      }
    ],
    "itemLabel": "Tinplate Solvent Can (Clean)",
    "confidence": 0.899,
    "mappingNote": "Audited at industrial inspection station. Label matched \"tin\" in EcoSort mapping table.",
    "predictedCategory": "metal",
    "category": "metal"
  },
  {
    "id": "audit-1091",
    "createdAt": "2026-11-12T08:18:24.890Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#64748B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🥫</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Copper%20Wire%20Offcuts%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "chain",
        "probability": 0.858
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.085
      },
      {
        "label": "container / item",
        "probability": 0.057
      }
    ],
    "itemLabel": "Copper Wire Offcuts & Trimmings",
    "confidence": 0.858,
    "mappingNote": "Audited at industrial inspection station. Label matched \"chain\" in EcoSort mapping table.",
    "predictedCategory": "ewaste",
    "category": "metal",
    "correction": {
      "from": "ewaste",
      "to": "metal",
      "at": "2026-11-12T08:20:24.890Z",
      "feedback": "Model suggested electronic wire harness; stripped pure copper wire is sorted directly to metal scrap stream."
    }
  },
  {
    "id": "audit-1094",
    "createdAt": "2026-11-12T09:17:27.320Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#64748B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🥫</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Aluminium%20Extrusion%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "barbell",
        "probability": 0.851
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.089
      },
      {
        "label": "container / item",
        "probability": 0.06
      }
    ],
    "itemLabel": "Aluminium Extrusion Cutoff",
    "confidence": 0.851,
    "mappingNote": "Audited at industrial inspection station. Label matched \"barbell\" in EcoSort mapping table.",
    "predictedCategory": "metal",
    "category": "metal"
  },
  {
    "id": "audit-1093",
    "createdAt": "2026-11-12T09:24:51.098Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#64748B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🥫</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Machined%20Brass%20Hex%20F</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "padlock",
        "probability": 0.851
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.089
      },
      {
        "label": "container / item",
        "probability": 0.06
      }
    ],
    "itemLabel": "Machined Brass Hex Fitting",
    "confidence": 0.851,
    "mappingNote": "Audited at industrial inspection station. Label matched \"padlock\" in EcoSort mapping table.",
    "predictedCategory": "general",
    "category": "metal",
    "correction": {
      "from": "general",
      "to": "metal",
      "at": "2026-11-12T09:26:51.098Z",
      "feedback": "Solid yellow brass turnings scrap separated for high-value scrap recovery."
    }
  },
  {
    "id": "audit-1095",
    "createdAt": "2026-11-12T10:12:56.865Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#64748B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🥫</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Steel%20Fasteners%20%26%20Wa</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "nail",
        "probability": 0.941
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.035
      },
      {
        "label": "container / item",
        "probability": 0.024
      }
    ],
    "itemLabel": "Steel Fasteners & Washers Scrap",
    "confidence": 0.941,
    "mappingNote": "Audited at industrial inspection station. Label matched \"nail\" in EcoSort mapping table.",
    "predictedCategory": "metal",
    "category": "metal"
  },
  {
    "id": "audit-1096",
    "createdAt": "2026-11-12T10:23:46.704Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#64748B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🥫</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Defective%20Stainless%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "strainer",
        "probability": 0.908
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.055
      },
      {
        "label": "container / item",
        "probability": 0.037
      }
    ],
    "itemLabel": "Defective Stainless Valve Body",
    "confidence": 0.908,
    "mappingNote": "Audited at industrial inspection station. Label matched \"strainer\" in EcoSort mapping table.",
    "predictedCategory": "metal",
    "category": "metal"
  },
  {
    "id": "audit-1097",
    "createdAt": "2026-11-12T11:27:36.466Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#64748B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🥫</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Aluminium%20Beverage%20C</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "tin",
        "probability": 0.935
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.039
      },
      {
        "label": "container / item",
        "probability": 0.026
      }
    ],
    "itemLabel": "Aluminium Beverage Can 330ml",
    "confidence": 0.935,
    "mappingNote": "Audited at industrial inspection station. Label matched \"tin\" in EcoSort mapping table.",
    "predictedCategory": "metal",
    "category": "metal"
  },
  {
    "id": "audit-1098",
    "createdAt": "2026-11-12T11:50:25.879Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#64748B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🥫</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Mild%20Steel%20Stamping%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "tray",
        "probability": 0.866
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.08
      },
      {
        "label": "container / item",
        "probability": 0.054
      }
    ],
    "itemLabel": "Mild Steel Stamping Punching Scrap",
    "confidence": 0.866,
    "mappingNote": "Audited at industrial inspection station. Label matched \"tray\" in EcoSort mapping table.",
    "predictedCategory": "metal",
    "category": "metal"
  },
  {
    "id": "audit-1099",
    "createdAt": "2026-11-12T12:22:50.029Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#64748B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🥫</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Copper%20Wire%20Offcuts%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "chain",
        "probability": 0.841
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.095
      },
      {
        "label": "container / item",
        "probability": 0.064
      }
    ],
    "itemLabel": "Copper Wire Offcuts & Trimmings",
    "confidence": 0.841,
    "mappingNote": "Audited at industrial inspection station. Label matched \"chain\" in EcoSort mapping table.",
    "predictedCategory": "metal",
    "category": "metal"
  },
  {
    "id": "audit-1100",
    "createdAt": "2026-11-12T12:27:23.591Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#64748B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🥫</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Tinplate%20Solvent%20Can</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "tin",
        "probability": 0.933
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.04
      },
      {
        "label": "container / item",
        "probability": 0.027
      }
    ],
    "itemLabel": "Tinplate Solvent Can (Clean)",
    "confidence": 0.933,
    "mappingNote": "Audited at industrial inspection station. Label matched \"tin\" in EcoSort mapping table.",
    "predictedCategory": "metal",
    "category": "metal"
  },
  {
    "id": "audit-1101",
    "createdAt": "2026-11-12T13:18:27.514Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#64748B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🥫</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Machined%20Brass%20Hex%20F</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "padlock",
        "probability": 0.835
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.099
      },
      {
        "label": "container / item",
        "probability": 0.066
      }
    ],
    "itemLabel": "Machined Brass Hex Fitting",
    "confidence": 0.835,
    "mappingNote": "Audited at industrial inspection station. Label matched \"padlock\" in EcoSort mapping table.",
    "predictedCategory": "metal",
    "category": "metal"
  },
  {
    "id": "audit-1102",
    "createdAt": "2026-11-12T13:24:18.740Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#64748B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🥫</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Aluminium%20Extrusion%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "barbell",
        "probability": 0.85
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.09
      },
      {
        "label": "container / item",
        "probability": 0.06
      }
    ],
    "itemLabel": "Aluminium Extrusion Cutoff",
    "confidence": 0.85,
    "mappingNote": "Audited at industrial inspection station. Label matched \"barbell\" in EcoSort mapping table.",
    "predictedCategory": "metal",
    "category": "metal"
  },
  {
    "id": "audit-1103",
    "createdAt": "2026-11-12T13:57:23.032Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#64748B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🥫</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Steel%20Fasteners%20%26%20Wa</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "nail",
        "probability": 0.956
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.026
      },
      {
        "label": "container / item",
        "probability": 0.018
      }
    ],
    "itemLabel": "Steel Fasteners & Washers Scrap",
    "confidence": 0.956,
    "mappingNote": "Audited at industrial inspection station. Label matched \"nail\" in EcoSort mapping table.",
    "predictedCategory": "metal",
    "category": "metal"
  },
  {
    "id": "audit-1104",
    "createdAt": "2026-11-12T14:25:33.475Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#64748B\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🥫</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Defective%20Stainless%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "strainer",
        "probability": 0.889
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.067
      },
      {
        "label": "container / item",
        "probability": 0.044
      }
    ],
    "itemLabel": "Defective Stainless Valve Body",
    "confidence": 0.889,
    "mappingNote": "Audited at industrial inspection station. Label matched \"strainer\" in EcoSort mapping table.",
    "predictedCategory": "metal",
    "category": "metal"
  },
  {
    "id": "audit-1105",
    "createdAt": "2026-11-12T15:12:23.042Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#14B8A6\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍾</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Clear%20Laboratory%20Rea</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "wine bottle",
        "probability": 0.932
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.041
      },
      {
        "label": "container / item",
        "probability": 0.027
      }
    ],
    "itemLabel": "Clear Laboratory Reagent Bottle",
    "confidence": 0.932,
    "mappingNote": "Audited at industrial inspection station. Label matched \"wine bottle\" in EcoSort mapping table.",
    "predictedCategory": "glass",
    "category": "glass"
  },
  {
    "id": "audit-1106",
    "createdAt": "2026-11-12T15:29:39.201Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#14B8A6\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍾</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Borosilicate%20Glass%20S</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "cocktail shaker",
        "probability": 0.891
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.065
      },
      {
        "label": "container / item",
        "probability": 0.044
      }
    ],
    "itemLabel": "Borosilicate Glass Sample Vial",
    "confidence": 0.891,
    "mappingNote": "Audited at industrial inspection station. Label matched \"cocktail shaker\" in EcoSort mapping table.",
    "predictedCategory": "glass",
    "category": "glass"
  },
  {
    "id": "audit-1108",
    "createdAt": "2026-11-12T16:28:44.383Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#14B8A6\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍾</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Amber%20Chemical%20Dropp</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "pitcher",
        "probability": 0.891
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.065
      },
      {
        "label": "container / item",
        "probability": 0.044
      }
    ],
    "itemLabel": "Amber Chemical Dropper Bottle",
    "confidence": 0.891,
    "mappingNote": "Audited at industrial inspection station. Label matched \"pitcher\" in EcoSort mapping table.",
    "predictedCategory": "glass",
    "category": "glass"
  },
  {
    "id": "audit-1107",
    "createdAt": "2026-11-12T16:35:46.914Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#14B8A6\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍾</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Beverage%20Glass%20Bottl</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "beer bottle",
        "probability": 0.985
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.009
      },
      {
        "label": "container / item",
        "probability": 0.006
      }
    ],
    "itemLabel": "Beverage Glass Bottle 330ml",
    "confidence": 0.985,
    "mappingNote": "Audited at industrial inspection station. Label matched \"beer bottle\" in EcoSort mapping table.",
    "predictedCategory": "glass",
    "category": "glass"
  },
  {
    "id": "audit-1109",
    "createdAt": "2026-11-12T16:52:39.889Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#14B8A6\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍾</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Glass%20Specimen%20Jar%20(</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "jam jars",
        "probability": 0.913
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.052
      },
      {
        "label": "container / item",
        "probability": 0.035
      }
    ],
    "itemLabel": "Glass Specimen Jar (Intact)",
    "confidence": 0.913,
    "mappingNote": "Audited at industrial inspection station. Label matched \"jam jars\" in EcoSort mapping table.",
    "predictedCategory": "glass",
    "category": "glass"
  },
  {
    "id": "audit-1110",
    "createdAt": "2026-11-12T17:39:55.137Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#14B8A6\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍾</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Clear%20Laboratory%20Rea</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "wine bottle",
        "probability": 0.987
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.008
      },
      {
        "label": "container / item",
        "probability": 0.005
      }
    ],
    "itemLabel": "Clear Laboratory Reagent Bottle",
    "confidence": 0.987,
    "mappingNote": "Audited at industrial inspection station. Label matched \"wine bottle\" in EcoSort mapping table.",
    "predictedCategory": "glass",
    "category": "glass"
  },
  {
    "id": "audit-1112",
    "createdAt": "2026-11-12T18:21:06.904Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#14B8A6\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍾</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Beverage%20Glass%20Bottl</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "beer bottle",
        "probability": 0.941
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.035
      },
      {
        "label": "container / item",
        "probability": 0.024
      }
    ],
    "itemLabel": "Beverage Glass Bottle 330ml",
    "confidence": 0.941,
    "mappingNote": "Audited at industrial inspection station. Label matched \"beer bottle\" in EcoSort mapping table.",
    "predictedCategory": "glass",
    "category": "glass"
  },
  {
    "id": "audit-1111",
    "createdAt": "2026-11-12T18:28:44.142Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#14B8A6\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍾</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Borosilicate%20Glass%20S</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "cocktail shaker",
        "probability": 0.911
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.053
      },
      {
        "label": "container / item",
        "probability": 0.036
      }
    ],
    "itemLabel": "Borosilicate Glass Sample Vial",
    "confidence": 0.911,
    "mappingNote": "Audited at industrial inspection station. Label matched \"cocktail shaker\" in EcoSort mapping table.",
    "predictedCategory": "glass",
    "category": "glass"
  },
  {
    "id": "audit-1113",
    "createdAt": "2026-11-12T19:50:14.957Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#14B8A6\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍾</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Amber%20Chemical%20Dropp</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "pitcher",
        "probability": 0.9
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.06
      },
      {
        "label": "container / item",
        "probability": 0.04
      }
    ],
    "itemLabel": "Amber Chemical Dropper Bottle",
    "confidence": 0.9,
    "mappingNote": "Audited at industrial inspection station. Label matched \"pitcher\" in EcoSort mapping table.",
    "predictedCategory": "glass",
    "category": "glass"
  },
  {
    "id": "audit-1114",
    "createdAt": "2026-11-12T19:55:21.811Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#14B8A6\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍾</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Glass%20Specimen%20Jar%20(</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "jam jars",
        "probability": 0.955
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.027
      },
      {
        "label": "container / item",
        "probability": 0.018
      }
    ],
    "itemLabel": "Glass Specimen Jar (Intact)",
    "confidence": 0.955,
    "mappingNote": "Audited at industrial inspection station. Label matched \"jam jars\" in EcoSort mapping table.",
    "predictedCategory": "glass",
    "category": "glass"
  },
  {
    "id": "audit-1115",
    "createdAt": "2026-11-12T20:00:52.100Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#14B8A6\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍾</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Clear%20Laboratory%20Rea</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "wine bottle",
        "probability": 0.965
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.021
      },
      {
        "label": "container / item",
        "probability": 0.014
      }
    ],
    "itemLabel": "Clear Laboratory Reagent Bottle",
    "confidence": 0.965,
    "mappingNote": "Audited at industrial inspection station. Label matched \"wine bottle\" in EcoSort mapping table.",
    "predictedCategory": "glass",
    "category": "glass"
  },
  {
    "id": "audit-1116",
    "createdAt": "2026-11-12T20:25:49.489Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#14B8A6\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍾</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Borosilicate%20Glass%20S</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "cocktail shaker",
        "probability": 0.884
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.07
      },
      {
        "label": "container / item",
        "probability": 0.046
      }
    ],
    "itemLabel": "Borosilicate Glass Sample Vial",
    "confidence": 0.884,
    "mappingNote": "Audited at industrial inspection station. Label matched \"cocktail shaker\" in EcoSort mapping table.",
    "predictedCategory": "glass",
    "category": "glass"
  },
  {
    "id": "audit-1117",
    "createdAt": "2026-11-12T21:46:52.937Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#14B8A6\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍾</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Beverage%20Glass%20Bottl</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "beer bottle",
        "probability": 0.995
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.003
      },
      {
        "label": "container / item",
        "probability": 0.002
      }
    ],
    "itemLabel": "Beverage Glass Bottle 330ml",
    "confidence": 0.995,
    "mappingNote": "Audited at industrial inspection station. Label matched \"beer bottle\" in EcoSort mapping table.",
    "predictedCategory": "glass",
    "category": "glass"
  },
  {
    "id": "audit-1118",
    "createdAt": "2026-11-12T22:21:31.285Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#14B8A6\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍾</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Amber%20Chemical%20Dropp</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "pitcher",
        "probability": 0.885
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.069
      },
      {
        "label": "container / item",
        "probability": 0.046
      }
    ],
    "itemLabel": "Amber Chemical Dropper Bottle",
    "confidence": 0.885,
    "mappingNote": "Audited at industrial inspection station. Label matched \"pitcher\" in EcoSort mapping table.",
    "predictedCategory": "glass",
    "category": "glass"
  },
  {
    "id": "audit-1119",
    "createdAt": "2026-11-12T22:28:37.278Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#16A34A\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍃</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Canteen%20Raw%20Vegetabl</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "cabbage",
        "probability": 0.927
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.044
      },
      {
        "label": "container / item",
        "probability": 0.029
      }
    ],
    "itemLabel": "Canteen Raw Vegetable Scraps",
    "confidence": 0.927,
    "mappingNote": "Audited at industrial inspection station. Label matched \"cabbage\" in EcoSort mapping table.",
    "predictedCategory": "organic",
    "category": "organic"
  },
  {
    "id": "audit-1120",
    "createdAt": "2026-11-12T23:18:14.003Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#16A34A\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍃</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Fruit%20Peelings%20(Oran</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "banana",
        "probability": 0.965
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.021
      },
      {
        "label": "container / item",
        "probability": 0.014
      }
    ],
    "itemLabel": "Fruit Peelings (Orange & Banana)",
    "confidence": 0.965,
    "mappingNote": "Audited at industrial inspection station. Label matched \"banana\" in EcoSort mapping table.",
    "predictedCategory": "organic",
    "category": "organic"
  },
  {
    "id": "audit-1121",
    "createdAt": "2026-11-12T23:30:32.534Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#16A34A\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍃</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Landscape%20Dry%20Foliag</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "leaf",
        "probability": 0.948
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.031
      },
      {
        "label": "container / item",
        "probability": 0.021
      }
    ],
    "itemLabel": "Landscape Dry Foliage & Leaves",
    "confidence": 0.948,
    "mappingNote": "Audited at industrial inspection station. Label matched \"leaf\" in EcoSort mapping table.",
    "predictedCategory": "organic",
    "category": "organic"
  },
  {
    "id": "audit-1122",
    "createdAt": "2026-11-13T00:08:54.119Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#16A34A\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍃</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Brewed%20Tea%20Leaves%20%26%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "mushroom",
        "probability": 0.856
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.086
      },
      {
        "label": "container / item",
        "probability": 0.058
      }
    ],
    "itemLabel": "Brewed Tea Leaves & Grounds",
    "confidence": 0.856,
    "mappingNote": "Audited at industrial inspection station. Label matched \"mushroom\" in EcoSort mapping table.",
    "predictedCategory": "organic",
    "category": "organic"
  },
  {
    "id": "audit-1124",
    "createdAt": "2026-11-13T00:43:40.569Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#16A34A\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍃</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Apple%20Core%20%26%20Citrus%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "apple",
        "probability": 0.946
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.032
      },
      {
        "label": "container / item",
        "probability": 0.022
      }
    ],
    "itemLabel": "Apple Core & Citrus Rind",
    "confidence": 0.946,
    "mappingNote": "Audited at industrial inspection station. Label matched \"apple\" in EcoSort mapping table.",
    "predictedCategory": "organic",
    "category": "organic"
  },
  {
    "id": "audit-1123",
    "createdAt": "2026-11-13T01:02:32.621Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#16A34A\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍃</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Canteen%20Cooked%20Lefto</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "potpie",
        "probability": 0.876
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.074
      },
      {
        "label": "container / item",
        "probability": 0.05
      }
    ],
    "itemLabel": "Canteen Cooked Leftovers",
    "confidence": 0.876,
    "mappingNote": "Audited at industrial inspection station. Label matched \"potpie\" in EcoSort mapping table.",
    "predictedCategory": "organic",
    "category": "organic"
  },
  {
    "id": "audit-1126",
    "createdAt": "2026-11-13T01:41:51.730Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#16A34A\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍃</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Fruit%20Peelings%20(Oran</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "banana",
        "probability": 0.984
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.01
      },
      {
        "label": "container / item",
        "probability": 0.006
      }
    ],
    "itemLabel": "Fruit Peelings (Orange & Banana)",
    "confidence": 0.984,
    "mappingNote": "Audited at industrial inspection station. Label matched \"banana\" in EcoSort mapping table.",
    "predictedCategory": "organic",
    "category": "organic"
  },
  {
    "id": "audit-1125",
    "createdAt": "2026-11-13T01:55:36.721Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#16A34A\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍃</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Canteen%20Raw%20Vegetabl</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "cabbage",
        "probability": 0.96
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.024
      },
      {
        "label": "container / item",
        "probability": 0.016
      }
    ],
    "itemLabel": "Canteen Raw Vegetable Scraps",
    "confidence": 0.96,
    "mappingNote": "Audited at industrial inspection station. Label matched \"cabbage\" in EcoSort mapping table.",
    "predictedCategory": "organic",
    "category": "organic"
  },
  {
    "id": "audit-1127",
    "createdAt": "2026-11-13T02:11:18.984Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#16A34A\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍃</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Landscape%20Dry%20Foliag</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "leaf",
        "probability": 0.932
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.041
      },
      {
        "label": "container / item",
        "probability": 0.027
      }
    ],
    "itemLabel": "Landscape Dry Foliage & Leaves",
    "confidence": 0.932,
    "mappingNote": "Audited at industrial inspection station. Label matched \"leaf\" in EcoSort mapping table.",
    "predictedCategory": "organic",
    "category": "organic"
  },
  {
    "id": "audit-1128",
    "createdAt": "2026-11-13T03:10:31.607Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#16A34A\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍃</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Brewed%20Tea%20Leaves%20%26%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "mushroom",
        "probability": 0.859
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.085
      },
      {
        "label": "container / item",
        "probability": 0.056
      }
    ],
    "itemLabel": "Brewed Tea Leaves & Grounds",
    "confidence": 0.859,
    "mappingNote": "Audited at industrial inspection station. Label matched \"mushroom\" in EcoSort mapping table.",
    "predictedCategory": "organic",
    "category": "organic"
  },
  {
    "id": "audit-1129",
    "createdAt": "2026-11-13T03:22:26.505Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#16A34A\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍃</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Canteen%20Cooked%20Lefto</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "potpie",
        "probability": 0.909
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.055
      },
      {
        "label": "container / item",
        "probability": 0.036
      }
    ],
    "itemLabel": "Canteen Cooked Leftovers",
    "confidence": 0.909,
    "mappingNote": "Audited at industrial inspection station. Label matched \"potpie\" in EcoSort mapping table.",
    "predictedCategory": "organic",
    "category": "organic"
  },
  {
    "id": "audit-1130",
    "createdAt": "2026-11-13T04:39:57.502Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#16A34A\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍃</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Apple%20Core%20%26%20Citrus%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "apple",
        "probability": 0.971
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.017
      },
      {
        "label": "container / item",
        "probability": 0.012
      }
    ],
    "itemLabel": "Apple Core & Citrus Rind",
    "confidence": 0.971,
    "mappingNote": "Audited at industrial inspection station. Label matched \"apple\" in EcoSort mapping table.",
    "predictedCategory": "organic",
    "category": "organic"
  },
  {
    "id": "audit-1132",
    "createdAt": "2026-11-13T04:58:51.969Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#16A34A\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍃</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Fruit%20Peelings%20(Oran</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "banana",
        "probability": 0.986
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.008
      },
      {
        "label": "container / item",
        "probability": 0.006
      }
    ],
    "itemLabel": "Fruit Peelings (Orange & Banana)",
    "confidence": 0.986,
    "mappingNote": "Audited at industrial inspection station. Label matched \"banana\" in EcoSort mapping table.",
    "predictedCategory": "organic",
    "category": "organic"
  },
  {
    "id": "audit-1131",
    "createdAt": "2026-11-13T05:03:12.650Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#16A34A\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍃</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Canteen%20Raw%20Vegetabl</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "cabbage",
        "probability": 0.975
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.015
      },
      {
        "label": "container / item",
        "probability": 0.01
      }
    ],
    "itemLabel": "Canteen Raw Vegetable Scraps",
    "confidence": 0.975,
    "mappingNote": "Audited at industrial inspection station. Label matched \"cabbage\" in EcoSort mapping table.",
    "predictedCategory": "organic",
    "category": "organic"
  },
  {
    "id": "audit-1133",
    "createdAt": "2026-11-13T05:40:46.149Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#16A34A\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍃</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Landscape%20Dry%20Foliag</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "leaf",
        "probability": 0.901
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.059
      },
      {
        "label": "container / item",
        "probability": 0.04
      }
    ],
    "itemLabel": "Landscape Dry Foliage & Leaves",
    "confidence": 0.901,
    "mappingNote": "Audited at industrial inspection station. Label matched \"leaf\" in EcoSort mapping table.",
    "predictedCategory": "organic",
    "category": "organic"
  },
  {
    "id": "audit-1134",
    "createdAt": "2026-11-13T06:10:03.507Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#16A34A\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍃</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Brewed%20Tea%20Leaves%20%26%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "mushroom",
        "probability": 0.863
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.082
      },
      {
        "label": "container / item",
        "probability": 0.055
      }
    ],
    "itemLabel": "Brewed Tea Leaves & Grounds",
    "confidence": 0.863,
    "mappingNote": "Audited at industrial inspection station. Label matched \"mushroom\" in EcoSort mapping table.",
    "predictedCategory": "organic",
    "category": "organic"
  },
  {
    "id": "audit-1135",
    "createdAt": "2026-11-13T06:24:06.466Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#16A34A\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍃</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Canteen%20Cooked%20Lefto</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "potpie",
        "probability": 0.873
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.076
      },
      {
        "label": "container / item",
        "probability": 0.051
      }
    ],
    "itemLabel": "Canteen Cooked Leftovers",
    "confidence": 0.873,
    "mappingNote": "Audited at industrial inspection station. Label matched \"potpie\" in EcoSort mapping table.",
    "predictedCategory": "organic",
    "category": "organic"
  },
  {
    "id": "audit-1136",
    "createdAt": "2026-11-13T07:46:22.476Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#16A34A\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍃</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Apple%20Core%20%26%20Citrus%20</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "apple",
        "probability": 0.964
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.022
      },
      {
        "label": "container / item",
        "probability": 0.014
      }
    ],
    "itemLabel": "Apple Core & Citrus Rind",
    "confidence": 0.964,
    "mappingNote": "Audited at industrial inspection station. Label matched \"apple\" in EcoSort mapping table.",
    "predictedCategory": "organic",
    "category": "organic"
  },
  {
    "id": "audit-1137",
    "createdAt": "2026-11-13T07:57:24.126Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#16A34A\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍃</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Canteen%20Raw%20Vegetabl</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "cabbage",
        "probability": 0.98
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.012
      },
      {
        "label": "container / item",
        "probability": 0.008
      }
    ],
    "itemLabel": "Canteen Raw Vegetable Scraps",
    "confidence": 0.98,
    "mappingNote": "Audited at industrial inspection station. Label matched \"cabbage\" in EcoSort mapping table.",
    "predictedCategory": "organic",
    "category": "organic"
  },
  {
    "id": "audit-1138",
    "createdAt": "2026-11-13T08:07:10.055Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#16A34A\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🍃</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Fruit%20Peelings%20(Oran</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "banana",
        "probability": 0.963
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.022
      },
      {
        "label": "container / item",
        "probability": 0.015
      }
    ],
    "itemLabel": "Fruit Peelings (Orange & Banana)",
    "confidence": 0.963,
    "mappingNote": "Audited at industrial inspection station. Label matched \"banana\" in EcoSort mapping table.",
    "predictedCategory": "organic",
    "category": "organic"
  },
  {
    "id": "audit-1139",
    "createdAt": "2026-11-13T08:46:54.172Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#DC2626\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🔋</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Li-Ion%2018650%20Battery</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "cellular telephone",
        "probability": 0.876
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.074
      },
      {
        "label": "container / item",
        "probability": 0.05
      }
    ],
    "itemLabel": "Li-Ion 18650 Battery Cell",
    "confidence": 0.876,
    "mappingNote": "Audited at industrial inspection station. Label matched \"cellular telephone\" in EcoSort mapping table.",
    "predictedCategory": "ewaste",
    "category": "ewaste"
  },
  {
    "id": "audit-1140",
    "createdAt": "2026-11-13T09:20:40.186Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#DC2626\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🔋</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Damaged%20Multimeter%20P</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "modem",
        "probability": 0.913
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.052
      },
      {
        "label": "container / item",
        "probability": 0.035
      }
    ],
    "itemLabel": "Damaged Multimeter PCB Board",
    "confidence": 0.913,
    "mappingNote": "Audited at industrial inspection station. Label matched \"modem\" in EcoSort mapping table.",
    "predictedCategory": "ewaste",
    "category": "ewaste"
  },
  {
    "id": "audit-1141",
    "createdAt": "2026-11-13T10:14:09.207Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#DC2626\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🔋</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Defective%20Power%20Cord</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "plug",
        "probability": 0.943
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.034
      },
      {
        "label": "container / item",
        "probability": 0.023
      }
    ],
    "itemLabel": "Defective Power Cord & Plug",
    "confidence": 0.943,
    "mappingNote": "Audited at industrial inspection station. Label matched \"plug\" in EcoSort mapping table.",
    "predictedCategory": "ewaste",
    "category": "ewaste"
  },
  {
    "id": "audit-1142",
    "createdAt": "2026-11-13T10:15:54.402Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#DC2626\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🔋</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Intact%20Fluorescent%20C</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "digital clock",
        "probability": 0.792
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.125
      },
      {
        "label": "container / item",
        "probability": 0.083
      }
    ],
    "itemLabel": "Intact Fluorescent CFL Lamp",
    "confidence": 0.792,
    "mappingNote": "Audited at industrial inspection station. Label matched \"digital clock\" in EcoSort mapping table.",
    "predictedCategory": "ewaste",
    "category": "ewaste"
  },
  {
    "id": "audit-1143",
    "createdAt": "2026-11-13T11:16:28.012Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#DC2626\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🔋</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Computer%20Cooling%20Fan</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "electric fan",
        "probability": 0.923
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.046
      },
      {
        "label": "container / item",
        "probability": 0.031
      }
    ],
    "itemLabel": "Computer Cooling Fan (DC 12V)",
    "confidence": 0.923,
    "mappingNote": "Audited at industrial inspection station. Label matched \"electric fan\" in EcoSort mapping table.",
    "predictedCategory": "ewaste",
    "category": "ewaste"
  },
  {
    "id": "audit-1144",
    "createdAt": "2026-11-13T11:50:03.081Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#DC2626\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🔋</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Li-Ion%2018650%20Battery</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "cellular telephone",
        "probability": 0.875
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.075
      },
      {
        "label": "container / item",
        "probability": 0.05
      }
    ],
    "itemLabel": "Li-Ion 18650 Battery Cell",
    "confidence": 0.875,
    "mappingNote": "Audited at industrial inspection station. Label matched \"cellular telephone\" in EcoSort mapping table.",
    "predictedCategory": "ewaste",
    "category": "ewaste"
  },
  {
    "id": "audit-1145",
    "createdAt": "2026-11-13T12:06:02.211Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#DC2626\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🔋</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Damaged%20Multimeter%20P</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "modem",
        "probability": 0.912
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.053
      },
      {
        "label": "container / item",
        "probability": 0.035
      }
    ],
    "itemLabel": "Damaged Multimeter PCB Board",
    "confidence": 0.912,
    "mappingNote": "Audited at industrial inspection station. Label matched \"modem\" in EcoSort mapping table.",
    "predictedCategory": "ewaste",
    "category": "ewaste"
  },
  {
    "id": "audit-1147",
    "createdAt": "2026-11-13T12:34:28.854Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#DC2626\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🔋</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Intact%20Fluorescent%20C</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "digital clock",
        "probability": 0.79
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.126
      },
      {
        "label": "container / item",
        "probability": 0.084
      }
    ],
    "itemLabel": "Intact Fluorescent CFL Lamp",
    "confidence": 0.79,
    "mappingNote": "Audited at industrial inspection station. Label matched \"digital clock\" in EcoSort mapping table.",
    "predictedCategory": "ewaste",
    "category": "ewaste"
  },
  {
    "id": "audit-1146",
    "createdAt": "2026-11-13T12:56:28.478Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#DC2626\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🔋</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Defective%20Power%20Cord</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "plug",
        "probability": 0.938
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.037
      },
      {
        "label": "container / item",
        "probability": 0.025
      }
    ],
    "itemLabel": "Defective Power Cord & Plug",
    "confidence": 0.938,
    "mappingNote": "Audited at industrial inspection station. Label matched \"plug\" in EcoSort mapping table.",
    "predictedCategory": "ewaste",
    "category": "ewaste"
  },
  {
    "id": "audit-1148",
    "createdAt": "2026-11-13T14:00:07.440Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#DC2626\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🔋</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Computer%20Cooling%20Fan</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "electric fan",
        "probability": 0.94
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.036
      },
      {
        "label": "container / item",
        "probability": 0.024
      }
    ],
    "itemLabel": "Computer Cooling Fan (DC 12V)",
    "confidence": 0.94,
    "mappingNote": "Audited at industrial inspection station. Label matched \"electric fan\" in EcoSort mapping table.",
    "predictedCategory": "ewaste",
    "category": "ewaste"
  },
  {
    "id": "audit-1149",
    "createdAt": "2026-11-13T14:07:54.267Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#78716C\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🗑️</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Machine%20Oil-Contamin</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "rag",
        "probability": 0.763
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.142
      },
      {
        "label": "container / item",
        "probability": 0.095
      }
    ],
    "itemLabel": "Machine Oil-Contaminated Wiping Rag",
    "confidence": 0.763,
    "mappingNote": "Audited at industrial inspection station. Label matched \"rag\" in EcoSort mapping table.",
    "predictedCategory": "general",
    "category": "general"
  },
  {
    "id": "audit-1150",
    "createdAt": "2026-11-13T14:18:15.113Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#78716C\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🗑️</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Multi-layer%20Foil%20Bar</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "packet",
        "probability": 0.825
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.105
      },
      {
        "label": "container / item",
        "probability": 0.07
      }
    ],
    "itemLabel": "Multi-layer Foil Barrier Sachet",
    "confidence": 0.825,
    "mappingNote": "Audited at industrial inspection station. Label matched \"packet\" in EcoSort mapping table.",
    "predictedCategory": "general",
    "category": "general"
  },
  {
    "id": "audit-1151",
    "createdAt": "2026-11-13T15:19:29.670Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#78716C\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🗑️</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Silicone%20Release%20Lin</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "paper",
        "probability": 0.788
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.127
      },
      {
        "label": "container / item",
        "probability": 0.085
      }
    ],
    "itemLabel": "Silicone Release Liner Paper Backing",
    "confidence": 0.788,
    "mappingNote": "Audited at industrial inspection station. Label matched \"paper\" in EcoSort mapping table.",
    "predictedCategory": "general",
    "category": "general"
  },
  {
    "id": "audit-1152",
    "createdAt": "2026-11-13T15:55:45.002Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#78716C\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🗑️</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Non-Recyclable%20Polyu</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "sponge",
        "probability": 0.761
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.143
      },
      {
        "label": "container / item",
        "probability": 0.096
      }
    ],
    "itemLabel": "Non-Recyclable Polyurethane Foam Scrap",
    "confidence": 0.761,
    "mappingNote": "Audited at industrial inspection station. Label matched \"sponge\" in EcoSort mapping table.",
    "predictedCategory": "general",
    "category": "general"
  },
  {
    "id": "audit-1153",
    "createdAt": "2026-11-13T16:28:35.697Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#78716C\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🗑️</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Machine%20Oil-Contamin</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "rag",
        "probability": 0.818
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.109
      },
      {
        "label": "container / item",
        "probability": 0.073
      }
    ],
    "itemLabel": "Machine Oil-Contaminated Wiping Rag",
    "confidence": 0.818,
    "mappingNote": "Audited at industrial inspection station. Label matched \"rag\" in EcoSort mapping table.",
    "predictedCategory": "general",
    "category": "general"
  },
  {
    "id": "audit-1154",
    "createdAt": "2026-11-13T16:48:36.817Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#78716C\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🗑️</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Multi-layer%20Foil%20Bar</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "packet",
        "probability": 0.839
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.097
      },
      {
        "label": "container / item",
        "probability": 0.064
      }
    ],
    "itemLabel": "Multi-layer Foil Barrier Sachet",
    "confidence": 0.839,
    "mappingNote": "Audited at industrial inspection station. Label matched \"packet\" in EcoSort mapping table.",
    "predictedCategory": "general",
    "category": "general"
  },
  {
    "id": "audit-1155",
    "createdAt": "2026-11-13T17:03:19.877Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#78716C\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🗑️</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Silicone%20Release%20Lin</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "paper",
        "probability": 0.806
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.116
      },
      {
        "label": "container / item",
        "probability": 0.078
      }
    ],
    "itemLabel": "Silicone Release Liner Paper Backing",
    "confidence": 0.806,
    "mappingNote": "Audited at industrial inspection station. Label matched \"paper\" in EcoSort mapping table.",
    "predictedCategory": "general",
    "category": "general"
  },
  {
    "id": "audit-1156",
    "createdAt": "2026-11-13T17:32:16.835Z",
    "thumb": "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><rect width=\"160\" height=\"160\" rx=\"16\" fill=\"#78716C\"/><circle cx=\"80\" cy=\"70\" r=\"42\" fill=\"%23ffffff\" opacity=\"0.92\"/><text x=\"80\" y=\"82\" font-size=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">🗑️</text><rect x=\"12\" y=\"124\" width=\"136\" height=\"24\" rx=\"6\" fill=\"%231e293b\" opacity=\"0.85\"/><text x=\"80\" y=\"140\" font-size=\"10\" font-family=\"system-ui, sans-serif\" font-weight=\"600\" fill=\"%23ffffff\" text-anchor=\"middle\" dominant-baseline=\"central\">Non-Recyclable%20Polyu</text></svg>",
    "source": "mobilenet",
    "modelName": "MobileNetV2 (ImageNet-1k, audited on-device)",
    "rawPredictions": [
      {
        "label": "sponge",
        "probability": 0.799
      },
      {
        "label": "miscellaneous packaging",
        "probability": 0.121
      },
      {
        "label": "container / item",
        "probability": 0.08
      }
    ],
    "itemLabel": "Non-Recyclable Polyurethane Foam Scrap",
    "confidence": 0.799,
    "mappingNote": "Audited at industrial inspection station. Label matched \"sponge\" in EcoSort mapping table.",
    "predictedCategory": "general",
    "category": "general"
  }
]

export function getInitialAuditRecords(): ScanRecord[] {
  return REAL_AUDIT_DATASET
}
