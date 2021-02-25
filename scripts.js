
artifact_set_dict = {
    1: "流浪大地的乐团",
    2: "逆飞的流星",
    3: "平息鸣雷的尊者",
    4: "渡过烈火的贤人",
    5: "被怜爱的少女",
    6: "炽烈的炎之魔女",
    7: "角斗士的终幕礼",
    8: "如雷的盛怒",
    9: "冰风迷途的勇士",
    10: "染血的骑士道",
    11: "昔日宗室之仪",
    12: "沉沦之心",
    13: "悠古的磐岩",
    14: "翠绿之影",
};
artifact_position_dict = {
    1: "生之花",
    2: "死之羽",
    3: "时之沙",
    4: "空之杯",
    5: "理之冠",
};
artifact_main_attr_dict = {
    1: "数值攻击力",
    2: "数值生命值",
    3: "百分比防御力",
    4: "百分比生命值",
    5: "百分比攻击力",
    6: "物理伤害加成",
    7: "元素充能",
    8: "元素精通",
    9: "暴击率",
    10: "暴击伤害",
    11: "治疗加成",
    12: "火元素加成",
    13: "雷元素加成",
    14: "水元素加成",
    15: "冰元素加成",
    16: "岩元素加成",
    17: "风元素加成",
};
artifact_sub_attr_dict = {
    1: "数值攻击力",
    2: "数值生命值",
    3: "数值防御力",
    4: "百分比攻击力",
    5: "百分比生命值",
    6: "百分比防御力",
    7: "元素精通",
    8: "元素充能",
    9: "暴击率",
    10: "暴击伤害",
};

////////////////////////////////  character_data  ////////////////////////////////
character_data = {
    1: {
        name: "旅行者",
        artifact_recommendation: [],
    },
    2: {
        //https://wiki.biligame.com/ys/%E5%87%9D%E5%85%89
        name: "凝光",
        artifact_recommendation: [
            {
                artifact_set_ids: [2], //逆飞的流星
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [9, 10, 1, 4], //暴击率、暴击伤害、数值攻击力、百分比攻击力
            },
            {
                artifact_set_ids: [2], //逆飞的流星
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [9, 10, 1, 4], //暴击率、暴击伤害、数值攻击力、百分比攻击力
            },
            {
                artifact_set_ids: [2], //逆飞的流星
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [5], //百分比攻击力
                artifact_sub_attr_ids: [9, 10, 1, 4], //暴击率、暴击伤害、数值攻击力、百分比攻击力
            },
            {
                artifact_set_ids: [2], //逆飞的流星
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [16, 5], //岩元素伤害加成，百分比攻击力
                artifact_sub_attr_ids: [9, 10, 1, 4], //暴击率、暴击伤害、数值攻击力、百分比攻击力
            },
            {
                artifact_set_ids: [2], //逆飞的流星
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [9, 10], //暴击率/暴击伤害
                artifact_sub_attr_ids: [9, 10, 1, 4], //暴击率、暴击伤害、数值攻击力、百分比攻击力
            },
            {
                artifact_set_ids: [13, 7], //悠古的磐岩、角斗士的终幕礼
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [9, 10, 1, 4], //暴击率、暴击伤害、数值攻击力、百分比攻击力
            },
            {
                artifact_set_ids: [13, 7], //悠古的磐岩、角斗士的终幕礼
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [9, 10, 1, 4], //暴击率、暴击伤害、数值攻击力、百分比攻击力
            },
            {
                artifact_set_ids: [13, 7], //悠古的磐岩、角斗士的终幕礼
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [5], //百分比攻击力
                artifact_sub_attr_ids: [9, 10, 1, 4], //暴击率、暴击伤害、数值攻击力、百分比攻击力
            },
            {
                artifact_set_ids: [13, 7], //悠古的磐岩、角斗士的终幕礼
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [16, 5], //岩元素伤害加成，百分比攻击力
                artifact_sub_attr_ids: [9, 10, 1, 4], //暴击率、暴击伤害、数值攻击力、百分比攻击力
            },
            {
                artifact_set_ids: [13, 7], //悠古的磐岩、角斗士的终幕礼
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [9, 10], //暴击率/暴击伤害
                artifact_sub_attr_ids: [9, 10, 1, 4], //暴击率、暴击伤害、数值攻击力、百分比攻击力
            },
        ],
    },
    3: {
        name: "北斗",
        artifact_recommendation: [],
    },

};
////////////////////////////////  character_data end  ////////////////////////////////



////////////////////////////////  populate drop down list  ////////////////////////////////
for (const key in artifact_set_dict) {
    if (Object.hasOwnProperty.call(artifact_set_dict, key)) {
        let option = document.createElement("option");
        option.text = artifact_set_dict[key];
        option.value = key;
        document.getElementById("artifact_set").add(option.cloneNode(true));
    }
}
for (const key in artifact_position_dict) {
    if (Object.hasOwnProperty.call(artifact_position_dict, key)) {
        let option = document.createElement("option");
        option.text = artifact_position_dict[key];
        option.value = key;
        document.getElementById("artifact_position").add(option.cloneNode(true));
    }
}

for (const key in artifact_main_attr_dict) {
    if (Object.hasOwnProperty.call(artifact_main_attr_dict, key)) {
        let option = document.createElement("option");
        option.text = artifact_main_attr_dict[key];
        option.value = key;
        document.getElementById("artifact_main_attr").add(option.cloneNode(true));
    }
}
for (const key in artifact_sub_attr_dict) {
    if (Object.hasOwnProperty.call(artifact_sub_attr_dict, key)) {
        let option = document.createElement("option");
        option.text = artifact_sub_attr_dict[key];
        option.value = key;
        document.getElementById("artifact_sub_attr_1").add(option.cloneNode(true));
        document.getElementById("artifact_sub_attr_2").add(option.cloneNode(true));
        document.getElementById("artifact_sub_attr_3").add(option.cloneNode(true));
        document.getElementById("artifact_sub_attr_4").add(option.cloneNode(true));
    }
}
////////////////////////////////  populate drop down list end  ////////////////////////////////


////////////////////////////////  test purpose: display character_data  ////////////////////////////////
for (const key in character_data) {
    if (Object.hasOwnProperty.call(character_data, key)) {
        if (Object.hasOwnProperty.call(character_data[key], "name")
            && Object.hasOwnProperty.call(character_data[key], "artifact_recommendation")) {

            let row = document.createElement("div");
            row.setAttribute("class", "row");
            let col_name = document.createElement("div");
            col_name.setAttribute("class", "col-2 border bg-light");
            col_name.textContent = character_data[key]["name"];
            row.appendChild(col_name.cloneNode(true));

            let col_artifacts = document.createElement("div");
            col_artifacts.setAttribute("class", "col-10 border bg-light");

            let artifact_recommendation = character_data[key]["artifact_recommendation"];
            for (let index = 0; index < artifact_recommendation.length; index++) {
                let row_artifact = document.createElement("div");
                row_artifact.setAttribute("class", "row");

                let col_artifact_set = document.createElement("div");
                col_artifact_set.setAttribute("class", "col border bg-light");
                col_artifact_set.textContent = artifact_recommendation[index].artifact_set_ids.map(x => artifact_set_dict[x]).join("、");

                let col_artifact_position = document.createElement("div");
                col_artifact_position.setAttribute("class", "col border bg-light");
                col_artifact_position.textContent = artifact_position_dict[artifact_recommendation[index].artifact_position_id];

                let col_artifact_main = document.createElement("div");
                col_artifact_main.setAttribute("class", "col border bg-light");
                col_artifact_main.textContent = artifact_recommendation[index].artifact_main_attr_ids.map(x => artifact_main_attr_dict[x]).join("、");

                let col_artifact_sub = document.createElement("div");
                col_artifact_sub.setAttribute("class", "col border bg-light");
                col_artifact_sub.textContent = artifact_recommendation[index].artifact_sub_attr_ids.map(x => artifact_sub_attr_dict[x]).join("、");

                row_artifact.appendChild(col_artifact_set.cloneNode(true));
                row_artifact.appendChild(col_artifact_position.cloneNode(true));
                row_artifact.appendChild(col_artifact_main.cloneNode(true));
                row_artifact.appendChild(col_artifact_sub.cloneNode(true));

                col_artifacts.appendChild(row_artifact.cloneNode(true));
            }
            row.appendChild(col_artifacts.cloneNode(true));

            document.getElementById("character_data_table").appendChild(row.cloneNode(true));
        }
    }
}
////////////////////////////////  test purpose: display character_data end  ////////////////////////////////


// search algorithm
document.getElementById("submit_btn").addEventListener("click", function () {
    document.getElementById("matched_result").innerHTML = '';

    let artifact_set = Number(document.getElementById("artifact_set").selectedOptions[0].value);
    let artifact_position = Number(document.getElementById("artifact_position").selectedOptions[0].value);
    let artifact_main_attr = Number(document.getElementById("artifact_main_attr").selectedOptions[0].value);
    let artifact_sub_attr_1 = Number(document.getElementById("artifact_sub_attr_1").selectedOptions[0].value);
    let artifact_sub_attr_2 = Number(document.getElementById("artifact_sub_attr_2").selectedOptions[0].value);
    let artifact_sub_attr_3 = Number(document.getElementById("artifact_sub_attr_3").selectedOptions[0].value);
    let artifact_sub_attr_4 = Number(document.getElementById("artifact_sub_attr_4").selectedOptions[0].value);
    let artifact_sub_attr = [artifact_sub_attr_1, artifact_sub_attr_2, artifact_sub_attr_3, artifact_sub_attr_4].filter(x => x != 0);

    let matched_characters = [];
    if (artifact_set != "" && artifact_position != "" && artifact_main_attr != "") {
        for (const key in character_data) {
            if (Object.hasOwnProperty.call(character_data, key)) {
                let character = character_data[key];
                let name = character["name"];
                let artifact_recommendation = character["artifact_recommendation"];
                if (name != "" && artifact_recommendation.length > 0) {
                    for (let index = 0; index < artifact_recommendation.length; index++) {
                        let artifact_set_ids = artifact_recommendation[index]["artifact_set_ids"];
                        let artifact_position_id = artifact_recommendation[index]["artifact_position_id"];
                        let artifact_main_attr_ids = artifact_recommendation[index]["artifact_main_attr_ids"];
                        let artifact_sub_attr_ids = artifact_recommendation[index]["artifact_sub_attr_ids"];

                        if (artifact_set_ids.includes(artifact_set) &&
                            artifact_position_id == artifact_position &&
                            artifact_main_attr_ids.includes(artifact_main_attr) &&
                            artifact_sub_attr.every(x => artifact_sub_attr_ids.includes(x))
                        ) {
                            matched_characters.push(name);
                        }
                    }
                }
            }
        }

        console.log(matched_characters);
        for (let index = 0; index < matched_characters.length; index++) {
            const element = matched_characters[index];
            let col = document.createElement("div");
            // col.setAttribute("class","col-2");

            let card = document.createElement("div");
            card.setAttribute("class", "card");

            let cardBody = document.createElement("div");
            cardBody.setAttribute("class", "card-body");

            let cardText = document.createElement("p");
            cardText.setAttribute("class", "card-text");
            cardText.textContent = matched_characters[index];

            cardBody.appendChild(cardText.cloneNode(true));
            card.appendChild(cardBody.cloneNode(true));
            col.appendChild(card.cloneNode(true));

            document.getElementById("matched_result").appendChild(col.cloneNode(true));
        }
    }
});



document.getElementById("artifact_position").addEventListener("change", function (event) {
    let targetElement = event.target || event.srcElement;
    let artifact_position = Number(targetElement.selectedOptions[0].value);
    let _artifact_main_attr = document.getElementById("artifact_main_attr");
    if (artifact_position == 1 /* 生之花 */) {
        let artifact_main_attr_options = artifact_main_attr.options;
        for (let index = 0; index < artifact_main_attr_options.length; index++) {
            if (artifact_main_attr_options[index].value == "2" /* 数值生命值 */) {
                _artifact_main_attr.selectedIndex = index;
                break;
            }
        }
        _artifact_main_attr.setAttribute("disabled", true);
    }
    else if (artifact_position == 2 /* 死之羽 */) {
        let artifact_main_attr_options = artifact_main_attr.options;
        for (let index = 0; index < artifact_main_attr_options.length; index++) {
            if (artifact_main_attr_options[index].value == "1" /* 数值攻击力 */) {
                _artifact_main_attr.selectedIndex = index;
                break;
            }
        }
        _artifact_main_attr.setAttribute("disabled", true);
    }
    else{
        _artifact_main_attr.removeAttribute("disabled");
    }
});