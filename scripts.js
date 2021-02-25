
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
    6: "暴击率",
    7: "暴击伤害",
    8: "元素精通",
    9: "元素充能效率",
    10: "治疗加成",
    11: "物理伤害加成",
    12: "火元素加成",
    13: "雷元素加成",
    14: "冰元素加成",
    15: "水元素加成",
    16: "风元素加成",
    17: "岩元素加成",
};
artifact_sub_attr_dict = {
    1: "数值攻击力",
    2: "数值生命值",
    3: "数值防御力",
    4: "百分比攻击力",
    5: "百分比生命值",
    6: "百分比防御力",
    7: "元素精通",
    8: "元素充能效率",
    9: "暴击率",
    10: "暴击伤害",
};

////////////////////////////////  character_data  ////////////////////////////////
character_data = {
    1: {
        name: "旅行者",
        link: "https://wiki.biligame.com/ys/%E6%97%85%E8%A1%8C%E8%80%85",
        artifact_recommendation: [],
    },
    2: {
        name: "凝光",
        link: "https://wiki.biligame.com/ys/%E5%87%9D%E5%85%89",
        artifact_recommendation: [
            {
                artifact_set_ids: [2], //逆飞的流星
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [2], //逆飞的流星
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [2], //逆飞的流星
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [5], //百分比攻击力
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [2], //逆飞的流星
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [17, 5], //岩元素伤害加成/百分比攻击力
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [2], //逆飞的流星
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [6, 7], //暴击率/暴击伤害
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [13, 7], //悠古的磐岩、角斗士的终幕礼
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [13, 7], //悠古的磐岩、角斗士的终幕礼
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [13, 7], //悠古的磐岩、角斗士的终幕礼
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [5], //百分比攻击力
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [13, 7], //悠古的磐岩、角斗士的终幕礼
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [17, 5], //岩元素伤害加成/百分比攻击力
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [13, 7], //悠古的磐岩、角斗士的终幕礼
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [6, 7], //暴击率/暴击伤害
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
        ],
    },
    3: {
        name: "北斗",
        link: "https://wiki.biligame.com/ys/%E5%8C%97%E6%96%97",
        artifact_recommendation: [],
    },
    4: {
        name: "行秋",
        link: "https://wiki.biligame.com/ys/%E8%A1%8C%E7%A7%8B",
        artifact_recommendation: [
            {
                artifact_set_ids: [11, 12], //昔日宗室之仪、沉沦之心
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [10, 9, 8, 4, 1], //暴击伤害、暴击率、元素充能、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [11, 12], //昔日宗室之仪、沉沦之心
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [10, 9, 8, 4, 1], //暴击伤害、暴击率、元素充能、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [11, 12], //昔日宗室之仪、沉沦之心
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [9], //元素充能效率
                artifact_sub_attr_ids: [10, 9, 8, 4, 1], //暴击伤害、暴击率、元素充能、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [11, 12], //昔日宗室之仪、沉沦之心
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [15], //水元素伤害加成
                artifact_sub_attr_ids: [10, 9, 8, 4, 1], //暴击伤害、暴击率、元素充能、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [11, 12], //昔日宗室之仪、沉沦之心
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [6, 7], //暴击率/暴击伤害
                artifact_sub_attr_ids: [10, 9, 8, 4, 1], //暴击伤害、暴击率、元素充能、百分比攻击力、数值攻击力
            },
        ],
    },
    5: {
        name: "辛焱",
        link: "https://wiki.biligame.com/ys/%E8%BE%9B%E7%84%B1",
        artifact_recommendation: [
            {
                artifact_set_ids: [10], //染血的骑士道
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [10], //染血的骑士道
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [10], //染血的骑士道
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [5], //百分比攻击力
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [10], //染血的骑士道
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [11, 5], //物理伤害加成/百分比攻击力
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [10], //染血的骑士道
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [6, 7], //暴击率/暴击伤害
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
        ],
    },
    6: {
        name: "重云",
        link: "https://wiki.biligame.com/ys/%E9%87%8D%E4%BA%91",
        artifact_recommendation: [],
    },
    7: {
        name: "香菱",
        link: "https://wiki.biligame.com/ys/%E9%A6%99%E8%8F%B1",
        artifact_recommendation: [
            {
                artifact_set_ids: [6], //炽烈的炎之魔女
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [10, 9, 8, 4, 1, 7], //暴击伤害、暴击率、元素充能、百分比攻击力、数值攻击力、元素精通
            },
            {
                artifact_set_ids: [6], //炽烈的炎之魔女
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [10, 9, 8, 4, 1, 7], //暴击伤害、暴击率、元素充能、百分比攻击力、数值攻击力、元素精通
            },
            {
                artifact_set_ids: [6], //炽烈的炎之魔女
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [5], //百分比攻击力
                artifact_sub_attr_ids: [10, 9, 8, 4, 1, 7], //暴击伤害、暴击率、元素充能、百分比攻击力、数值攻击力、元素精通
            },
            {
                artifact_set_ids: [6], //炽烈的炎之魔女
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [12], //火元素伤害加成
                artifact_sub_attr_ids: [10, 9, 8, 4, 1, 7], //暴击伤害、暴击率、元素充能、百分比攻击力、数值攻击力、元素精通
            },
            {
                artifact_set_ids: [6], //炽烈的炎之魔女
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [6, 7], //暴击率/暴击伤害
                artifact_sub_attr_ids: [10, 9, 8, 4, 1, 7], //暴击伤害、暴击率、元素充能、百分比攻击力、数值攻击力、元素精通
            },
            {
                artifact_set_ids: [11], //昔日宗室之仪
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [10, 9, 8, 4, 1, 7], //暴击伤害、暴击率、元素充能、百分比攻击力、数值攻击力、元素精通
            },
            {
                artifact_set_ids: [11], //昔日宗室之仪
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [10, 9, 8, 4, 1, 7], //暴击伤害、暴击率、元素充能、百分比攻击力、数值攻击力、元素精通
            },
            {
                artifact_set_ids: [11], //昔日宗室之仪
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [5], //百分比攻击力
                artifact_sub_attr_ids: [10, 9, 8, 4, 1, 7], //暴击伤害、暴击率、元素充能、百分比攻击力、数值攻击力、元素精通
            },
            {
                artifact_set_ids: [11], //昔日宗室之仪
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [12], //火元素伤害加成
                artifact_sub_attr_ids: [10, 9, 8, 4, 1, 7], //暴击伤害、暴击率、元素充能、百分比攻击力、数值攻击力、元素精通
            },
            {
                artifact_set_ids: [11], //昔日宗室之仪
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [6, 7], //暴击率/暴击伤害
                artifact_sub_attr_ids: [10, 9, 8, 4, 1, 7], //暴击伤害、暴击率、元素充能、百分比攻击力、数值攻击力、元素精通
            },
        ],
    },
    8: {
        name: "七七",
        link: "https://wiki.biligame.com/ys/%E4%B8%83%E4%B8%83",
        artifact_recommendation: [
            {
                artifact_set_ids: [5, 7], //被怜爱的少女、角斗士的终幕礼
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [4, 1, 8], //百分比攻击力、数值攻击力、元素充能
            },
            {
                artifact_set_ids: [5, 7], //被怜爱的少女、角斗士的终幕礼
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [4, 1, 8], //百分比攻击力、数值攻击力、元素充能
            },
            {
                artifact_set_ids: [5, 7], //被怜爱的少女、角斗士的终幕礼
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [5, 9], //百分比攻击力/元素充能效率
                artifact_sub_attr_ids: [4, 1, 8], //百分比攻击力、数值攻击力、元素充能
            },
            {
                artifact_set_ids: [5, 7], //被怜爱的少女、角斗士的终幕礼
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [5], //百分比攻击力
                artifact_sub_attr_ids: [4, 1, 8], //百分比攻击力、数值攻击力、元素充能
            },
            {
                artifact_set_ids: [5, 7], //被怜爱的少女、角斗士的终幕礼
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [10], //治疗加成
                artifact_sub_attr_ids: [4, 1, 8], //百分比攻击力、数值攻击力、元素充能
            },
        ],
    },
    9: {
        name: "刻晴",
        link: "https://wiki.biligame.com/ys/%E5%88%BB%E6%99%B4",
        artifact_recommendation: [
            {
                artifact_set_ids: [10], //染血的骑士道
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [10, 9], //暴击伤害、暴击率
            },
            {
                artifact_set_ids: [10], //染血的骑士道
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [10, 9], //暴击伤害、暴击率
            },
            {
                artifact_set_ids: [10], //染血的骑士道
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [5], //百分比攻击力
                artifact_sub_attr_ids: [10, 9], //暴击伤害、暴击率
            },
            {
                artifact_set_ids: [10], //染血的骑士道
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [11], //物理伤害加成
                artifact_sub_attr_ids: [10, 9], //暴击伤害、暴击率
            },
            {
                artifact_set_ids: [10], //染血的骑士道
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [7], //暴击伤害
                artifact_sub_attr_ids: [10, 9], //暴击伤害、暴击率
            },
            {
                artifact_set_ids: [3, 8, 7], //平息鸣雷的尊者、如雷的盛怒、角斗士的终幕礼
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [10, 9], //暴击伤害、暴击率
            },
            {
                artifact_set_ids: [3, 8, 7], //平息鸣雷的尊者、如雷的盛怒、角斗士的终幕礼
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [10, 9], //暴击伤害、暴击率
            },
            {
                artifact_set_ids: [3, 8, 7], //平息鸣雷的尊者、如雷的盛怒、角斗士的终幕礼
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [5], //百分比攻击力
                artifact_sub_attr_ids: [10, 9], //暴击伤害、暴击率
            },
            {
                artifact_set_ids: [3, 8, 7], //平息鸣雷的尊者、如雷的盛怒、角斗士的终幕礼
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [13], //雷元素伤害加成
                artifact_sub_attr_ids: [10, 9], //暴击伤害、暴击率
            },
            {
                artifact_set_ids: [3, 8, 7], //平息鸣雷的尊者、如雷的盛怒、角斗士的终幕礼
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [7], //暴击伤害
                artifact_sub_attr_ids: [10, 9], //暴击伤害、暴击率
            },
        ],
    },
    10: {
        name: "甘雨",
        link: "https://wiki.biligame.com/ys/%E7%94%98%E9%9B%A8",
        artifact_recommendation: [
            {
                artifact_set_ids: [9], //冰风迷途的勇士
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [10], //暴击伤害
            },
            {
                artifact_set_ids: [9], //冰风迷途的勇士
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [10], //暴击伤害
            },
            {
                artifact_set_ids: [9], //冰风迷途的勇士
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [5], //百分比攻击力
                artifact_sub_attr_ids: [10], //暴击伤害
            },
            {
                artifact_set_ids: [9], //冰风迷途的勇士
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [14], //冰元素伤害加成
                artifact_sub_attr_ids: [10], //暴击伤害
            },
            {
                artifact_set_ids: [9], //冰风迷途的勇士
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [7], //暴击伤害
                artifact_sub_attr_ids: [], //暴击伤害
            },
            {
                artifact_set_ids: [1], //流浪大地的乐团
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [10], //暴击伤害
            },
            {
                artifact_set_ids: [1], //流浪大地的乐团
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [10], //暴击伤害
            },
            {
                artifact_set_ids: [1], //流浪大地的乐团
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [5], //百分比攻击力
                artifact_sub_attr_ids: [10], //暴击伤害
            },
            {
                artifact_set_ids: [1], //流浪大地的乐团
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [14], //冰元素伤害加成
                artifact_sub_attr_ids: [10], //暴击伤害
            },
            {
                artifact_set_ids: [1], //流浪大地的乐团
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [7], //暴击伤害
                artifact_sub_attr_ids: [], //暴击伤害
            },
        ],
    },
    11: {
        name: "钟离",
        link: "https://wiki.biligame.com/ys/%E9%92%9F%E7%A6%BB",
        artifact_recommendation: [
            {
                artifact_set_ids: [13, 11], //悠古的磐岩、昔日宗室之仪
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [10, 9, 5, 2, 4, 1, 8], //暴击伤害、暴击率、百分比生命值、数值生命值、百分比攻击力、数值攻击力、元素充能
            },
            {
                artifact_set_ids: [13, 11], //悠古的磐岩、昔日宗室之仪
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [10, 9, 5, 2, 4, 1, 8], //暴击伤害、暴击率、百分比生命值、数值生命值、百分比攻击力、数值攻击力、元素充能
            },
            {
                artifact_set_ids: [13, 11], //悠古的磐岩、昔日宗室之仪
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [4, 5], //百分比生命值>百分比攻击力
                artifact_sub_attr_ids: [10, 9, 5, 2, 4, 1, 8], //暴击伤害、暴击率、百分比生命值、数值生命值、百分比攻击力、数值攻击力、元素充能
            },
            {
                artifact_set_ids: [13, 11], //悠古的磐岩、昔日宗室之仪
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [17, 4], //岩元素加成>百分比生命值
                artifact_sub_attr_ids: [10, 9, 5, 2, 4, 1, 8], //暴击伤害、暴击率、百分比生命值、数值生命值、百分比攻击力、数值攻击力、元素充能
            },
            {
                artifact_set_ids: [13, 11], //悠古的磐岩、昔日宗室之仪
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [6, 7], //暴击率/暴击伤害
                artifact_sub_attr_ids: [10, 9, 5, 2, 4, 1, 8], //暴击伤害、暴击率、百分比生命值、数值生命值、百分比攻击力、数值攻击力、元素充能
            },
            {
                artifact_set_ids: [2, 7], //逆飞的流星、角斗士的终幕礼
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [10, 9], //暴击伤害、暴击率
            },
            {
                artifact_set_ids: [2, 7], //逆飞的流星、角斗士的终幕礼
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [10, 9], //暴击伤害、暴击率
            },
            {
                artifact_set_ids: [2, 7], //逆飞的流星、角斗士的终幕礼
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [4, 5], //百分比生命值/百分比攻击力
                artifact_sub_attr_ids: [10, 9], //暴击伤害、暴击率
            },
            {
                artifact_set_ids: [2, 7], //逆飞的流星、角斗士的终幕礼
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [11, 4], //物理伤害加成/百分比生命值
                artifact_sub_attr_ids: [10, 9], //暴击伤害、暴击率
            },
            {
                artifact_set_ids: [2, 7], //逆飞的流星、角斗士的终幕礼
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [6, 7], //暴击率/暴击伤害
                artifact_sub_attr_ids: [10, 9], //暴击伤害、暴击率
            },
            {
                artifact_set_ids: [13, 11], //悠古的磐岩、昔日宗室之仪
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [5, 2], //百分比生命值、数值生命值
            },
            {
                artifact_set_ids: [13, 11], //悠古的磐岩、昔日宗室之仪
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [5, 2], //百分比生命值、数值生命值
            },
            {
                artifact_set_ids: [13, 11], //悠古的磐岩、昔日宗室之仪
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [4], //百分比生命值
                artifact_sub_attr_ids: [5, 2], //百分比生命值、数值生命值
            },
            {
                artifact_set_ids: [13, 11], //悠古的磐岩、昔日宗室之仪
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [4], //百分比生命值
                artifact_sub_attr_ids: [5, 2], //百分比生命值、数值生命值
            },
            {
                artifact_set_ids: [13, 11], //悠古的磐岩、昔日宗室之仪
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [4], //百分比生命值
                artifact_sub_attr_ids: [5, 2], //百分比生命值、数值生命值
            },
        ],
    },
    12: {
        name: "魈",
        link: "https://wiki.biligame.com/ys/%E9%AD%88",
        artifact_recommendation: [
            {
                artifact_set_ids: [14, 7], //翠绿之影、角斗士的终幕礼
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [10, 9, 8], //暴击伤害、暴击率、元素充能
            },
            {
                artifact_set_ids: [14, 7], //翠绿之影、角斗士的终幕礼
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [10, 9, 8], //暴击伤害、暴击率、元素充能
            },
            {
                artifact_set_ids: [14, 7], //翠绿之影、角斗士的终幕礼
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [5], //百分比攻击力
                artifact_sub_attr_ids: [10, 9, 8], //暴击伤害、暴击率、元素充能
            },
            {
                artifact_set_ids: [14, 7], //翠绿之影、角斗士的终幕礼
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [16], //风元素加成
                artifact_sub_attr_ids: [10, 9, 8], //暴击伤害、暴击率、元素充能
            },
            {
                artifact_set_ids: [14, 7], //翠绿之影、角斗士的终幕礼
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [6, 7], //暴击率/暴击伤害
                artifact_sub_attr_ids: [10, 9, 8], //暴击伤害、暴击率、元素充能
            },
        ],
    },
    13: {
        name: "达达利亚",
        link: "https://wiki.biligame.com/ys/%E8%BE%BE%E8%BE%BE%E5%88%A9%E4%BA%9A",
        artifact_recommendation: [
            {
                artifact_set_ids: [12], //沉沦之心
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [12], //沉沦之心
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [12], //沉沦之心
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [5], //百分比攻击力
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [12], //沉沦之心
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [15], //水元素加成
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [12], //沉沦之心
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [6, 7], //暴击率/暴击伤害
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [12, 7], //沉沦之心、角斗士的终幕礼
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [12, 7], //沉沦之心、角斗士的终幕礼
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [12, 7], //沉沦之心、角斗士的终幕礼
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [5], //百分比攻击力
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [12, 7], //沉沦之心、角斗士的终幕礼
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [15], //水元素加成
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [12, 7], //沉沦之心、角斗士的终幕礼
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [6, 7], //暴击率/暴击伤害
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [11, 12, 1], //昔日宗室之仪、沉沦之心、流浪大地的乐团
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [9, 10, 4, 1], //暴击率 > 暴击伤害、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [11, 12, 1], //昔日宗室之仪、沉沦之心、流浪大地的乐团
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [9, 10, 4, 1], //暴击率 > 暴击伤害、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [11, 12, 1], //昔日宗室之仪、沉沦之心、流浪大地的乐团
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [5], //百分比攻击力
                artifact_sub_attr_ids: [9, 10, 4, 1], //暴击率 > 暴击伤害、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [11, 12, 1], //昔日宗室之仪、沉沦之心、流浪大地的乐团
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [15], //水元素加成
                artifact_sub_attr_ids: [9, 10, 4, 1], //暴击率 > 暴击伤害、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [11, 12, 1], //昔日宗室之仪、沉沦之心、流浪大地的乐团
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [6], //暴击率
                artifact_sub_attr_ids: [9, 10, 4, 1], //暴击率 > 暴击伤害、百分比攻击力、数值攻击力
            },
        ],
    },
    14: {
        name: "丽莎",
        link: "https://wiki.biligame.com/ys/%E4%B8%BD%E8%8E%8E",
        artifact_recommendation: [],
    },
    15: {
        name: "凯亚",
        link: "https://wiki.biligame.com/ys/%E5%87%AF%E4%BA%9A",
        artifact_recommendation: [],
    },
    16: {
        name: "安柏",
        link: "https://wiki.biligame.com/ys/%E5%AE%89%E6%9F%8F",
        artifact_recommendation: [],
    },
    17: {
        name: "班尼特",
        link: "https://wiki.biligame.com/ys/%E7%8F%AD%E5%B0%BC%E7%89%B9",
        artifact_recommendation: [
            {
                artifact_set_ids: [11], //昔日宗室之仪
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [5, 8], //百分比生命值、元素充能效率
            },
            {
                artifact_set_ids: [11], //昔日宗室之仪
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [5, 8], //百分比生命值、元素充能效率
            },
            {
                artifact_set_ids: [11], //昔日宗室之仪
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [9, 4], //元素充能效率、百分比生命值
                artifact_sub_attr_ids: [5, 8], //百分比生命值、元素充能效率
            },
            {
                artifact_set_ids: [11], //昔日宗室之仪
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [9, 4], //元素充能效率、百分比生命值
                artifact_sub_attr_ids: [5, 8], //百分比生命值、元素充能效率
            },
            {
                artifact_set_ids: [11], //昔日宗室之仪
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [9, 4, 10], //元素充能效率、百分比生命值、治疗加成
                artifact_sub_attr_ids: [5, 8], //百分比生命值、元素充能效率
            },
            {
                artifact_set_ids: [11], //昔日宗室之仪
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [5, 2, 4, 1, 9, 10, 8], //百分比生命值、数值生命值、百分比攻击力、数值攻击力、暴击率、暴击伤害、元素充能效率
            },
            {
                artifact_set_ids: [11], //昔日宗室之仪
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [5, 2, 4, 1, 9, 10, 8], //百分比生命值、数值生命值、百分比攻击力、数值攻击力、暴击率、暴击伤害、元素充能效率
            },
            {
                artifact_set_ids: [11], //昔日宗室之仪
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [9, 7, 5], //元素充能效率、暴击伤害、百分比攻击力
                artifact_sub_attr_ids: [5, 2, 4, 1, 9, 10, 8], //百分比生命值、数值生命值、百分比攻击力、数值攻击力、暴击率、暴击伤害、元素充能效率
            },
            {
                artifact_set_ids: [11], //昔日宗室之仪
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [9, 7, 5], //元素充能效率、暴击伤害、百分比攻击力
                artifact_sub_attr_ids: [5, 2, 4, 1, 9, 10, 8], //百分比生命值、数值生命值、百分比攻击力、数值攻击力、暴击率、暴击伤害、元素充能效率
            },
            {
                artifact_set_ids: [11], //昔日宗室之仪
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [9, 7, 5], //元素充能效率、暴击伤害、百分比攻击力
                artifact_sub_attr_ids: [5, 2, 4, 1, 9, 10, 8], //百分比生命值、数值生命值、百分比攻击力、数值攻击力、暴击率、暴击伤害、元素充能效率
            },
            {
                artifact_set_ids: [6], //炽烈的炎之魔女
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [10, 9, 8, 4, 1], //暴击伤害、暴击率、元素充能效率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [6], //炽烈的炎之魔女
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [10, 9, 8, 4, 1], //暴击伤害、暴击率、元素充能效率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [6], //炽烈的炎之魔女
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [5], //百分比攻击力
                artifact_sub_attr_ids: [10, 9, 8, 4, 1], //暴击伤害、暴击率、元素充能效率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [6], //炽烈的炎之魔女
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [12], //火元素伤害加成
                artifact_sub_attr_ids: [10, 9, 8, 4, 1], //暴击伤害、暴击率、元素充能效率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [6], //炽烈的炎之魔女
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [6], //暴击率
                artifact_sub_attr_ids: [10, 9, 8, 4, 1], //暴击伤害、暴击率、元素充能效率、百分比攻击力、数值攻击力
            },
        ],
    },
    18: {
        name: "砂糖",
        link: "https://wiki.biligame.com/ys/%E7%A0%82%E7%B3%96",
        artifact_recommendation: [],
    },
    19: {
        name: "芭芭拉",
        link: "https://wiki.biligame.com/ys/%E8%8A%AD%E8%8A%AD%E6%8B%89",
        artifact_recommendation: [
            {
                artifact_set_ids: [5], //被怜爱的少女
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [5, 2, 8], //百分比生命值、数值生命值、元素充能
            },
            {
                artifact_set_ids: [5], //被怜爱的少女
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [5, 2, 8], //百分比生命值、数值生命值、元素充能
            },
            {
                artifact_set_ids: [5], //被怜爱的少女
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [4, 9], //百分比生命值/元素充能效率
                artifact_sub_attr_ids: [5, 2, 8], //百分比生命值、数值生命值、元素充能
            },
            {
                artifact_set_ids: [5], //被怜爱的少女
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [4], //百分比生命值
                artifact_sub_attr_ids: [5, 2, 8], //百分比生命值、数值生命值、元素充能
            },
            {
                artifact_set_ids: [5], //被怜爱的少女
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [10], //治疗加成
                artifact_sub_attr_ids: [5, 2, 8], //百分比生命值、数值生命值、元素充能
            },
        ],
    },
    20: {
        name: "菲谢尔",
        link: "https://wiki.biligame.com/ys/%E8%8F%B2%E8%B0%A2%E5%B0%94",
        artifact_recommendation: [
            {
                artifact_set_ids: [8, 1, 7], //如雷的盛怒、流浪大地的乐团、角斗士的终幕礼
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [10, 9, 4, 1, 7], //暴击伤害、暴击率、百分比攻击力、数值攻击力、元素精通
            },
            {
                artifact_set_ids: [8, 1, 7], //如雷的盛怒、流浪大地的乐团、角斗士的终幕礼
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [10, 9, 4, 1, 7], //暴击伤害、暴击率、百分比攻击力、数值攻击力、元素精通
            },
            {
                artifact_set_ids: [8, 1, 7], //如雷的盛怒、流浪大地的乐团、角斗士的终幕礼
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [5], //百分比攻击力
                artifact_sub_attr_ids: [10, 9, 4, 1, 7], //暴击伤害、暴击率、百分比攻击力、数值攻击力、元素精通
            },
            {
                artifact_set_ids: [8, 1, 7], //如雷的盛怒、流浪大地的乐团、角斗士的终幕礼
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [13], //雷元素加成
                artifact_sub_attr_ids: [10, 9, 4, 1, 7], //暴击伤害、暴击率、百分比攻击力、数值攻击力、元素精通
            },
            {
                artifact_set_ids: [8, 1, 7], //如雷的盛怒、流浪大地的乐团、角斗士的终幕礼
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [6, 7], //暴击率/暴击伤害
                artifact_sub_attr_ids: [10, 9, 4, 1, 7], //暴击伤害、暴击率、百分比攻击力、数值攻击力、元素精通
            },
            {
                artifact_set_ids: [10, 7], //染血的骑士道、角斗士的终幕礼
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力、
            },
            {
                artifact_set_ids: [10, 7], //染血的骑士道、角斗士的终幕礼
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力、
            },
            {
                artifact_set_ids: [10, 7], //染血的骑士道、角斗士的终幕礼
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [5], //百分比攻击力
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力、
            },
            {
                artifact_set_ids: [10, 7], //染血的骑士道、角斗士的终幕礼
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [11], //物理伤害加成
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力、
            },
            {
                artifact_set_ids: [10, 7], //染血的骑士道、角斗士的终幕礼
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [6, 7], //暴击率/暴击伤害
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力、
            },
        ],
    },
    21: {
        name: "诺艾尔",
        link: "https://wiki.biligame.com/ys/%E8%AF%BA%E8%89%BE%E5%B0%94",
        artifact_recommendation: [
            {
                artifact_set_ids: [2], //逆飞的流星
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [10, 3, 6, 8], //暴击伤害、数值防御力、百分比防御力、元素充能效率
            },
            {
                artifact_set_ids: [2], //逆飞的流星
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [10, 3, 6, 8], //暴击伤害、数值防御力、百分比防御力、元素充能效率
            },
            {
                artifact_set_ids: [2], //逆飞的流星
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [3], //百分比防御力
                artifact_sub_attr_ids: [10, 3, 6, 8], //暴击伤害、数值防御力、百分比防御力、元素充能效率
            },
            {
                artifact_set_ids: [2], //逆飞的流星
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [17], //岩元素伤害加成
                artifact_sub_attr_ids: [10, 3, 6, 8], //暴击伤害、数值防御力、百分比防御力、元素充能效率
            },
            {
                artifact_set_ids: [2], //逆飞的流星
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [3, 6, 7], //百分比防御力/暴击率/暴击伤害
                artifact_sub_attr_ids: [10, 3, 6, 8], //暴击伤害、数值防御力、百分比防御力、元素充能效率
            },
            {
                artifact_set_ids: [2, 5], //逆飞的流星、被怜爱的少女
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [3, 6, 8], //数值防御力、百分比防御力、元素充能效率
            },
            {
                artifact_set_ids: [2, 5], //逆飞的流星、被怜爱的少女
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [3, 6, 8], //数值防御力、百分比防御力、元素充能效率
            },
            {
                artifact_set_ids: [2, 5], //逆飞的流星、被怜爱的少女
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [9, 3], //元素充能效率/百分比防御力
                artifact_sub_attr_ids: [3, 6, 8], //数值防御力、百分比防御力、元素充能效率
            },
            {
                artifact_set_ids: [2, 5], //逆飞的流星、被怜爱的少女
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [9, 3], //元素充能效率/百分比防御力
                artifact_sub_attr_ids: [3, 6, 8], //数值防御力、百分比防御力、元素充能效率
            },
            {
                artifact_set_ids: [2, 5], //逆飞的流星、被怜爱的少女
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [9, 3], //元素充能效率/百分比防御力
                artifact_sub_attr_ids: [3, 6, 8], //数值防御力、百分比防御力、元素充能效率
            },
        ],
    },
    22: {
        name: "迪奥娜",
        link: "https://wiki.biligame.com/ys/%E8%BF%AA%E5%A5%A5%E5%A8%9C",
        artifact_recommendation: [
            {
                artifact_set_ids: [5, 11], //被怜爱的少女、昔日宗室之仪
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [5, 2, 8], //百分比生命值、数值生命值、元素充能效率
            },
            {
                artifact_set_ids: [5, 11], //被怜爱的少女、昔日宗室之仪
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [5, 2, 8], //百分比生命值、数值生命值、元素充能效率
            },
            {
                artifact_set_ids: [5, 11], //被怜爱的少女、昔日宗室之仪
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [9], //元素充能效率
                artifact_sub_attr_ids: [5, 2, 8], //百分比生命值、数值生命值、元素充能效率
            },
            {
                artifact_set_ids: [5, 11], //被怜爱的少女、昔日宗室之仪
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [4], //百分比生命值
                artifact_sub_attr_ids: [5, 2, 8], //百分比生命值、数值生命值、元素充能效率
            },
            {
                artifact_set_ids: [5, 11], //被怜爱的少女、昔日宗室之仪
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [4], //百分比生命值
                artifact_sub_attr_ids: [5, 2, 8], //百分比生命值、数值生命值、元素充能效率
            },
        ],
    },
    23: {
        name: "雷泽",
        link: "https://wiki.biligame.com/ys/%E9%9B%B7%E6%B3%BD",
        artifact_recommendation: [],
    },
    24: {
        name: "可莉",
        link: "https://wiki.biligame.com/ys/%E5%8F%AF%E8%8E%89",
        artifact_recommendation: [
            {
                artifact_set_ids: [6], //炽烈的炎之魔女
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [6], //炽烈的炎之魔女
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [6], //炽烈的炎之魔女
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [5], //百分比攻击力
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [6], //炽烈的炎之魔女
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [12], //火元素伤害加成
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [6], //炽烈的炎之魔女
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [6, 7], //暴击率/暴击伤害
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
        ],
    },
    25: {
        name: "温迪",
        link: "https://wiki.biligame.com/ys/%E6%B8%A9%E8%BF%AA",
        artifact_recommendation: [
            {
                artifact_set_ids: [14], //翠绿之影
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [10, 9, 4, 1, 8], //暴击伤害、暴击率、百分比攻击力、数值攻击力、元素充能
            },
            {
                artifact_set_ids: [14], //翠绿之影
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [10, 9, 4, 1, 8], //暴击伤害、暴击率、百分比攻击力、数值攻击力、元素充能
            },
            {
                artifact_set_ids: [14], //翠绿之影
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [5], //百分比攻击力
                artifact_sub_attr_ids: [10, 9, 4, 1, 8], //暴击伤害、暴击率、百分比攻击力、数值攻击力、元素充能
            },
            {
                artifact_set_ids: [14], //翠绿之影
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [16], //风元素加成
                artifact_sub_attr_ids: [10, 9, 4, 1, 8], //暴击伤害、暴击率、百分比攻击力、数值攻击力、元素充能
            },
            {
                artifact_set_ids: [14], //翠绿之影
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [6, 7], //暴击率/暴击伤害
                artifact_sub_attr_ids: [10, 9, 4, 1, 8], //暴击伤害、暴击率、百分比攻击力、数值攻击力、元素充能
            },
            {
                artifact_set_ids: [14], //翠绿之影
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [8, 4, 1, 7], //元素充能、百分比攻击力、数值攻击力、元素精通
            },
            {
                artifact_set_ids: [14], //翠绿之影
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [8, 4, 1, 7], //元素充能、百分比攻击力、数值攻击力、元素精通
            },
            {
                artifact_set_ids: [14], //翠绿之影
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [9, 5], //元素充能、百分比攻击力
                artifact_sub_attr_ids: [8, 4, 1, 7], //元素充能、百分比攻击力、数值攻击力、元素精通
            },
            {
                artifact_set_ids: [14], //翠绿之影
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [9, 5], //元素充能、百分比攻击力
                artifact_sub_attr_ids: [8, 4, 1, 7], //元素充能、百分比攻击力、数值攻击力、元素精通
            },
            {
                artifact_set_ids: [14], //翠绿之影
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [9, 5], //元素充能、百分比攻击力
                artifact_sub_attr_ids: [8, 4, 1, 7], //元素充能、百分比攻击力、数值攻击力、元素精通
            },
        ],
    },
    26: {
        name: "琴",
        link: "https://wiki.biligame.com/ys/%E7%90%B4",
        artifact_recommendation: [],
    },
    27: {
        name: "莫娜",
        link: "https://wiki.biligame.com/ys/%E8%8E%AB%E5%A8%9C",
        artifact_recommendation: [],
    },
    28: {
        name: "迪卢克",
        link: "https://wiki.biligame.com/ys/%E8%BF%AA%E5%8D%A2%E5%85%8B",
        artifact_recommendation: [],
    },
    29: {
        name: "阿贝多",
        link: "https://wiki.biligame.com/ys/%E9%98%BF%E8%B4%9D%E5%A4%9A",
        artifact_recommendation: [
            {
                artifact_set_ids: [13], //悠古的磐岩
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [10, 9, 6, 3, 4], //暴击伤害、暴击率、百分比防御力、数值防御力、百分比攻击力
            },
            {
                artifact_set_ids: [13], //悠古的磐岩
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [10, 9, 6, 3, 4], //暴击伤害、暴击率、百分比防御力、数值防御力、百分比攻击力
            },
            {
                artifact_set_ids: [13], //悠古的磐岩
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [3], //百分比防御力
                artifact_sub_attr_ids: [10, 9, 6, 3, 4], //暴击伤害、暴击率、百分比防御力、数值防御力、百分比攻击力
            },
            {
                artifact_set_ids: [13], //悠古的磐岩
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [17], //岩元素伤害加成
                artifact_sub_attr_ids: [10, 9, 6, 3, 4], //暴击伤害、暴击率、百分比防御力、数值防御力、百分比攻击力
            },
            {
                artifact_set_ids: [13], //悠古的磐岩
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [6, 7], //暴击率/暴击伤害
                artifact_sub_attr_ids: [10, 9, 6, 3, 4], //暴击伤害、暴击率、百分比防御力、数值防御力、百分比攻击力
            },
            {
                artifact_set_ids: [13, 11], //悠古的磐岩、昔日宗室之仪
                artifact_position_id: 1, //生之花
                artifact_main_attr_ids: [2], //数值生命值
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [13, 11], //悠古的磐岩、昔日宗室之仪
                artifact_position_id: 2, //死之羽
                artifact_main_attr_ids: [1], //数值攻击力
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [13, 11], //悠古的磐岩、昔日宗室之仪
                artifact_position_id: 3, //时之沙
                artifact_main_attr_ids: [5], //百分比攻击力
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [13, 11], //悠古的磐岩、昔日宗室之仪
                artifact_position_id: 4, //空之杯
                artifact_main_attr_ids: [17], //岩元素伤害加成
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
            {
                artifact_set_ids: [13, 11], //悠古的磐岩、昔日宗室之仪
                artifact_position_id: 5, //理之冠
                artifact_main_attr_ids: [6, 7], //暴击率/暴击伤害
                artifact_sub_attr_ids: [10, 9, 4, 1], //暴击伤害、暴击率、百分比攻击力、数值攻击力
            },
        ],
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


//character format: child of character_data object
function addCharacterRowToTable(character, table_id) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    let col_name = document.createElement("div");
    col_name.setAttribute("class", "col-2 border bg-light");
    let character_link = document.createElement("a");
    character_link.setAttribute("href", character["link"]);
    character_link.setAttribute("target", "blank");
    character_link.textContent = character["name"];
    col_name.appendChild(character_link.cloneNode(true));
    row.appendChild(col_name.cloneNode(true));

    let col_artifacts = document.createElement("div");
    col_artifacts.setAttribute("class", "col-10 border bg-light");

    let artifact_recommendation = character["artifact_recommendation"];
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

    document.getElementById(table_id).appendChild(row.cloneNode(true));
}
function addCharacterArtifactRowToTable(character, artifact, table_id) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    let col_name = document.createElement("div");
    col_name.setAttribute("class", "col-2 border bg-light");
    let character_link = document.createElement("a");
    character_link.setAttribute("href", character["link"]);
    character_link.setAttribute("target", "blank");
    character_link.textContent = character["name"];
    col_name.appendChild(character_link.cloneNode(true));
    row.appendChild(col_name.cloneNode(true));

    let col_artifacts = document.createElement("div");
    col_artifacts.setAttribute("class", "col-10 border bg-light");

    //////
    let row_artifact = document.createElement("div");
    row_artifact.setAttribute("class", "row");

    let col_artifact_set = document.createElement("div");
    col_artifact_set.setAttribute("class", "col border bg-light");
    col_artifact_set.textContent = artifact.artifact_set_ids.map(x => artifact_set_dict[x]).join("、");

    let col_artifact_position = document.createElement("div");
    col_artifact_position.setAttribute("class", "col border bg-light");
    col_artifact_position.textContent = artifact_position_dict[artifact.artifact_position_id];

    let col_artifact_main = document.createElement("div");
    col_artifact_main.setAttribute("class", "col border bg-light");
    col_artifact_main.textContent = artifact.artifact_main_attr_ids.map(x => artifact_main_attr_dict[x]).join("、");

    let col_artifact_sub = document.createElement("div");
    col_artifact_sub.setAttribute("class", "col border bg-light");
    col_artifact_sub.textContent = artifact.artifact_sub_attr_ids.map(x => artifact_sub_attr_dict[x]).join("、");

    row_artifact.appendChild(col_artifact_set.cloneNode(true));
    row_artifact.appendChild(col_artifact_position.cloneNode(true));
    row_artifact.appendChild(col_artifact_main.cloneNode(true));
    row_artifact.appendChild(col_artifact_sub.cloneNode(true));

    col_artifacts.appendChild(row_artifact.cloneNode(true));
    //////

    row.appendChild(col_artifacts.cloneNode(true));

    document.getElementById(table_id).appendChild(row.cloneNode(true));
}

////////////////////////////////  test purpose: display character_data  ////////////////////////////////
for (const key in character_data) {
    if (Object.hasOwnProperty.call(character_data, key)) {
        if (Object.hasOwnProperty.call(character_data[key], "name")
            && Object.hasOwnProperty.call(character_data[key], "artifact_recommendation")) {
                addCharacterRowToTable(character_data[key], "character_data_table");
        }
    }
}
////////////////////////////////  test purpose: display character_data end  ////////////////////////////////


// search algorithm
document.getElementById("submit_btn").addEventListener("click", function () {
    document.getElementById("matched_result").innerHTML = '';
    document.getElementById("result_data_table_body").innerHTML = '';
    
    let artifact_set = Number(document.getElementById("artifact_set").selectedOptions[0].value);
    let artifact_position = Number(document.getElementById("artifact_position").selectedOptions[0].value);
    let artifact_main_attr = Number(document.getElementById("artifact_main_attr").selectedOptions[0].value);
    let artifact_sub_attr_1 = Number(document.getElementById("artifact_sub_attr_1").selectedOptions[0].value);
    let artifact_sub_attr_2 = Number(document.getElementById("artifact_sub_attr_2").selectedOptions[0].value);
    let artifact_sub_attr_3 = Number(document.getElementById("artifact_sub_attr_3").selectedOptions[0].value);
    let artifact_sub_attr_4 = Number(document.getElementById("artifact_sub_attr_4").selectedOptions[0].value);
    let artifact_sub_attr = [artifact_sub_attr_1, artifact_sub_attr_2, artifact_sub_attr_3, artifact_sub_attr_4].filter(x => x != 0);

    let matched_characters = [];
    if (artifact_set != "" && artifact_position != "" && artifact_main_attr != "" && artifact_sub_attr.length > 0) {
        for (const key in character_data) {
            if (Object.hasOwnProperty.call(character_data, key)) {
                let character = character_data[key];
                let name = character["name"];
                let link = character["link"];
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
                            // artifact_sub_attr.every(x => artifact_sub_attr_ids.includes(x))
                            (artifact_sub_attr_ids.length == 0 || artifact_sub_attr.filter(x => artifact_sub_attr_ids.includes(x)).length > 0)) {
                            matched_characters.push(name);

                            // let col = document.createElement("div");
                            // // col.setAttribute("class","col-2");

                            // let card = document.createElement("div");
                            // card.setAttribute("class", "card");

                            // let cardBody = document.createElement("div");
                            // cardBody.setAttribute("class", "card-body");

                            // let cardText = document.createElement("a");
                            // cardText.setAttribute("class", "card-text");
                            // cardText.setAttribute("href", link);
                            // cardText.setAttribute("target", "blank");
                            // cardText.textContent = name;

                            // cardBody.appendChild(cardText.cloneNode(true));
                            // card.appendChild(cardBody.cloneNode(true));
                            // col.appendChild(card.cloneNode(true));

                            // document.getElementById("matched_result").appendChild(col.cloneNode(true));

                            //new
                            addCharacterArtifactRowToTable(character, artifact_recommendation[index], "result_data_table_body");
                        }
                    }
                }
            }
        }
        console.log(matched_characters);

        if (matched_characters.length == 0) {
            let col = document.createElement("div");
            col.innerHTML = "未找到合适的角色 <del>（太残酷了ORZ...）</del>";
            document.getElementById("matched_result").appendChild(col.cloneNode(true));
        }
    }
    else{
        let col = document.createElement("div");
            col.innerHTML = "请选择 <mark>圣遗物名称</mark>、<mark>位置</mark>、<mark>主属性</mark>，和至少一项<mark>副属性</mark>";
            document.getElementById("matched_result").appendChild(col.cloneNode(true));
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