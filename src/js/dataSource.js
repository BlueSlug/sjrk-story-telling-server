/*
Copyright 2017 OCAD University
Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.
You may obtain a copy of the ECL 2.0 License and BSD License at
https://raw.githubusercontent.com/fluid-project/sjrk-story-telling-server/master/LICENSE.txt
*/

"use strict";

var fluid = require("infusion");
require("kettle");

fluid.defaults("sjrk.storyTelling.server.dataSource", {
    gradeNames: ["kettle.dataSource.URL", "kettle.dataSource.CouchDB"],
    rules: {
        writePayload: {
            type: {
                transform: {
                    type: "fluid.transforms.literalValue",
                    input: "story"
                }
            },
            value: ""
        },
        readPayload: {
            "": "value"
        }
    },
    url: "http://localhost:5984/stories/%storyId",
    termMap: {
        storyId: "%directStoryId"
    },
    writable: true
});