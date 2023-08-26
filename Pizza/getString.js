function calculateHash() {
    var inputString = document.getElementById("inputString").value;
    var hashValue = hash(inputString);
    var array = [
        "Pizza神保佑，无论何时何地",
        "抛开烦恼，迎接新的挑战",
        "人生如同Pizza，多姿多彩",
        "开心就好",
        "Pizza是快乐的滋味",
        "Pizza是人生的美好瞬间",
        "不Pizza不快乐",
        "Pizza神保佑，好运接踵而至",
        "Pizza是你的幸福密码",
        "Pizza神保佑，Pizza无处不在",
        "Pizza改变世界",
        "Pizza是欢笑的源泉",
        "Pizza神保佑，Pizza充满你的生活",
        "Pizza是快乐的灵药",
        "Pizza让人欢喜",
        "Pizza是你的灵魂伴侣",
        "Pizza是人生的馈赠",
        "Pizza是人生的盛宴",
        "Pizza是心灵的疗愈",
        "Pizza神保佑，Pizza带来好运",
        "Pizza是人生的精彩篇章",
        "Pizza神保佑，Pizza赋予你力量",
        "Pizza让人心醉",
        "Pizza神保佑，Pizza陪伴你成长",
        "Pizza是人生的甜蜜享受",
        "Pizza是智慧的化身",
        "Pizza是你的灵感助推器",
        "Pizza神保佑，Pizza点亮你的梦想",
        "Pizza是你的奇思妙想之源",
        "Pizza是创意的滋养",
        "Pizza是你的灵感火花",
        "Pizza神保佑，Pizza点亮人生之路",
        "Pizza是你的创造力助推器",
        "Pizza是人生的艺术品",
        "Pizza是你的创作灵感",
        "Pizza神保佑，Pizza点亮聪明才智",
        "Pizza是你的智慧之光",
        "Pizza是智慧的滋养",
        "Pizza是你的思维火花",
        "Pizza神保佑，Pizza引领你的选择",
        "Pizza是你的决策指南",
        "Pizza是人生的指南针",
        "Pizza是你的决策智囊",
        "Pizza神保佑，Pizza助力你的成功",
        "Pizza是你的胜利庆祝",
        "Pizza是人生的胜者之选",
        "Pizza是你的成功助推器",
        "Pizza神保佑，Pizza点亮你的激情",
        "Pizza是你的梦想之火",
        "Pizza是人生的激情之源",
        "Pizza是你的激情火花",
        "Pizza神保佑，Pizza赋予你勇气",
        "Pizza是你的挑战迎接者",
        "Pizza是人生的勇敢之选",
        "Pizza是你的勇气助推器",
        "Pizza神保佑，Pizza点亮你的坚持",
        "Pizza是你的奋斗之光",
        "Pizza是人生的坚韧之选",
        "Pizza是你的坚持助推器",
        "Pizza神保佑，Pizza引领你的冒险",
        "Pizza是你的探险指南",
        "Pizza是人生的冒险之选",
        "Pizza是你的冒险助推器",
        "Pizza神保佑，Pizza点亮你的善良",
        "Pizza是你的关爱之光",
        "Pizza是人生的善良之选",
        "Pizza是你的善良助推器",
        "Pizza大法好",
        "Pizza大法是正法",
        "Pizza大法是正法，教人向善势必佳",
        "Midoutrs 勇不可当！",
        "八万年前，神王Pizza大战魔神……",
        "Ronz and 可乐 are very good friends!",
        "嘿嘿哈！",
        "饿了困了，膜拜Pizza吧！",
        "Potato King!!!",
        "水是剧毒的！",
        "只送大脑",
        "猪BJ",
        "钓鱼岛是中国的！",
        "Creeper?",
        "我要无糖嘞！",
        "你偷我家！！！",
        "JC！",
        "shutdown -s -t",
        "Windows+X U U",
        "Pizza是神！",
        "Pizza最伟大！",
        "PIZZA!!!!!!!!!!",
        "哼哼哼啊啊啊啊啊啊啊啊啊啊"
    ]; // Your array of strings
    var selectedString;
    if(hashValue==-1) {
        selectedString = "什么也没有";
    }
    else if (hashValue % 3 == 0) {
        selectedString = array[mod(hashValue, 68)];
    }
    else selectedString = array[67 + mod(hashValue, array.length - 67)];
    document.getElementById("result").innerHTML = selectedString;
}
function hash(str) {
    var hash = 0;
    if (str.length == 0) {
        return -1;
    }
    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}
function mod(n, m) {
    return ((n % m) + m) % m;
}