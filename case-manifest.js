window.CASE_MANIFEST = {
    "schemaVersion":  2,
    "projectName":  "V2TemplateWebPreviewCase",
    "caseSlug":  "v2templatewebpreviewcase",
    "mode":  "Hybrid",
    "selectedApps":  [
                         "search",
                         "browser",
                         "social",
                         "line",
                         "mail",
                         "photos",
                         "audio",
                         "files",
                         "notes",
                         "settings"
                     ],
    "storageKey":  "v2templatewebpreviewcase-case-v1",
    "appCatalog":  {
                       "search":  {
                                      "id":  "search",
                                      "label":  "Search",
                                      "icon":  "S",
                                      "entry":  "apps/search/index.html",
                                      "dependencies":  [
                                                           "browser"
                                                       ],
                                      "capabilities":  [
                                                           "interactive",
                                                           "local-state",
                                                           "evidence-hooks",
                                                           "keyboard",
                                                           "mobile",
                                                           "single-html"
                                                       ]
                                  },
                       "browser":  {
                                       "id":  "browser",
                                       "label":  "Browser",
                                       "icon":  "B",
                                       "entry":  "apps/browser/index.html",
                                       "dependencies":  [
                                                            "search"
                                                        ],
                                       "capabilities":  [
                                                            "interactive",
                                                            "local-state",
                                                            "evidence-hooks",
                                                            "keyboard",
                                                            "mobile",
                                                            "single-html"
                                                        ]
                                   },
                       "social":  {
                                      "id":  "social",
                                      "label":  "Social",
                                      "icon":  "O",
                                      "entry":  "apps/social/index.html",
                                      "dependencies":  [

                                                       ],
                                      "capabilities":  [
                                                           "interactive",
                                                           "local-state",
                                                           "evidence-hooks",
                                                           "keyboard",
                                                           "mobile",
                                                           "single-html"
                                                       ]
                                  },
                       "line":  {
                                    "id":  "line",
                                    "label":  "Link",
                                    "icon":  "L",
                                    "entry":  "apps/line/index.html",
                                    "dependencies":  [

                                                     ],
                                    "capabilities":  [
                                                         "interactive",
                                                         "local-state",
                                                         "evidence-hooks",
                                                         "keyboard",
                                                         "mobile",
                                                         "single-html"
                                                     ]
                                },
                       "mail":  {
                                    "id":  "mail",
                                    "label":  "Postbox",
                                    "icon":  "M",
                                    "entry":  "apps/mail/index.html",
                                    "dependencies":  [

                                                     ],
                                    "capabilities":  [
                                                         "interactive",
                                                         "local-state",
                                                         "evidence-hooks",
                                                         "keyboard",
                                                         "mobile",
                                                         "single-html"
                                                     ]
                                },
                       "photos":  {
                                      "id":  "photos",
                                      "label":  "Photos",
                                      "icon":  "P",
                                      "entry":  "apps/photos/index.html",
                                      "dependencies":  [

                                                       ],
                                      "capabilities":  [
                                                           "interactive",
                                                           "local-state",
                                                           "evidence-hooks",
                                                           "keyboard",
                                                           "mobile",
                                                           "single-html"
                                                       ]
                                  },
                       "audio":  {
                                     "id":  "audio",
                                     "label":  "Audio",
                                     "icon":  "A",
                                     "entry":  "apps/audio/index.html",
                                     "dependencies":  [

                                                      ],
                                     "capabilities":  [
                                                          "interactive",
                                                          "local-state",
                                                          "evidence-hooks",
                                                          "keyboard",
                                                          "mobile",
                                                          "single-html"
                                                      ]
                                 },
                       "files":  {
                                     "id":  "files",
                                     "label":  "Files",
                                     "icon":  "F",
                                     "entry":  "apps/files/index.html",
                                     "dependencies":  [

                                                      ],
                                     "capabilities":  [
                                                          "interactive",
                                                          "local-state",
                                                          "evidence-hooks",
                                                          "keyboard",
                                                          "mobile",
                                                          "single-html"
                                                      ]
                                 },
                       "notes":  {
                                     "id":  "notes",
                                     "label":  "Notes",
                                     "icon":  "N",
                                     "entry":  "apps/notes/index.html",
                                     "dependencies":  [

                                                      ],
                                     "capabilities":  [
                                                          "interactive",
                                                          "local-state",
                                                          "evidence-hooks",
                                                          "keyboard",
                                                          "mobile",
                                                          "single-html"
                                                      ]
                                 },
                       "settings":  {
                                        "id":  "settings",
                                        "label":  "Settings",
                                        "icon":  "C",
                                        "entry":  "apps/settings/index.html",
                                        "dependencies":  [

                                                         ],
                                        "capabilities":  [
                                                             "interactive",
                                                             "local-state",
                                                             "evidence-hooks",
                                                             "keyboard",
                                                             "mobile",
                                                             "single-html"
                                                         ]
                                    }
                   },
    "dependencies":  {
                         "search":  [
                                        "browser"
                                    ],
                         "browser":  [
                                         "search"
                                     ]
                     },
    "features":  {
                     "generatedImages":  false,
                     "audioMode":  "Off",
                     "audio":  false,
                     "video":  false,
                     "fictionalSites":  false,
                     "richSites":  true,
                     "interactiveMessaging":  true,
                     "localCalls":  true,
                     "searchSessions":  true,
                     "pageVersioning":  true,
                     "templateV2Smoke":  true
                 },
    "templateVersion":  "2.1.0",
    "version":  "2.1.0",
    "distributionMode":  "WebHosted"
};