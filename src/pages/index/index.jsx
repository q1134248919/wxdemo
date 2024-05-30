import { View, Button } from "@tarojs/components";
import { useEffect, useRef, useState } from "react";
import Taro from "@tarojs/taro";

import "./index.scss";

const App = () => {
  const cList = [
    { name: "北京烤鸭", feature: "皮脆肉嫩，搭配薄饼和甜面酱" },
    { name: "麻婆豆腐", feature: "麻辣鲜香，豆腐滑嫩" },
    { name: "火锅", feature: "麻辣鲜香，多种食材煮在锅中" },
    { name: "糖醋里脊", feature: "酸甜可口，外酥里嫩" },
    { name: "宫保鸡丁", feature: "酸甜微辣，鸡肉嫩滑" },
    { name: "红烧肉", feature: "酱香浓郁，肥而不腻" },
    { name: "咕咾肉", feature: "酸甜可口，外酥里嫩" },
    { name: "鱼香肉丝", feature: "酸甜微辣，肉丝鲜嫩" },
    { name: "清蒸鱼", feature: "肉质鲜嫩，清淡原汁原味" },
    { name: "炒河粉", feature: "鲜香滑嫩，口感丰富" },
    { name: "豆腐脑", feature: "滑嫩爽口，搭配各种调料" },
    { name: "小笼包", feature: "皮薄馅多，汤汁丰富" },
    { name: "煎饼果子", feature: "外酥内软，馅料丰富" },
    { name: "虾饺", feature: "皮薄馅大，鲜美多汁" },
    { name: "龙井虾仁", feature: "虾仁鲜嫩，茶香清新" },
    { name: "桂花糯米藕", feature: "甜香软糯，口感丰富" },
    { name: "扬州炒饭", feature: "米饭粒粒分明，食材丰富" },
    { name: "糯米鸡", feature: "糯米软糯，鸡肉鲜美" },
    { name: "臭豆腐", feature: "外酥内嫩，香臭兼备" },
    { name: "春卷", feature: "外皮酥脆，馅料多样" },
    { name: "炸酱面", feature: "面条筋道，酱香浓郁" },
    { name: "西湖醋鱼", feature: "鱼肉鲜嫩，酸甜适口" },
    { name: "锅包肉", feature: "外酥里嫩，酸甜适口" },
    { name: "宫廷豌豆黄", feature: "甜而不腻，口感细腻" },
    { name: "牛肉面", feature: "汤头浓郁，牛肉鲜嫩" },
    { name: "酸辣汤", feature: "酸辣开胃，口感丰富" },
    { name: "油条", feature: "外酥内软，香脆可口" },
    { name: "麻辣小龙虾", feature: "麻辣鲜香，肉质鲜美" },
    { name: "糖葫芦", feature: "酸甜适口，外脆内软" },
    { name: "辣子鸡", feature: "麻辣香脆，鸡肉鲜嫩" },
    { name: "羊肉泡馍", feature: "汤鲜味美，羊肉嫩滑" },
    { name: "桂花糕", feature: "香甜软糯，桂花清香" },
    { name: "馄饨", feature: "皮薄馅多，汤鲜味美" },
    { name: "烤冷面", feature: "外焦里嫩，口感丰富" },
    { name: "黄焖鸡米饭", feature: "鸡肉嫩滑，酱香浓郁" },
    { name: "三杯鸡", feature: "酱香浓郁，鸡肉嫩滑" },
    { name: "麻辣香锅", feature: "麻辣鲜香，多种食材搭配" },
    { name: "东坡肉", feature: "酱香浓郁，肥而不腻" },
    { name: "红烧狮子头", feature: "肉质鲜嫩，酱香浓郁" },
    { name: "梅菜扣肉", feature: "酱香浓郁，梅菜清香" },
    { name: "小炒肉", feature: "肉质鲜嫩，味道鲜香" },
    { name: "米饭", feature: "颗粒饱满，香软可口" },
    { name: "馒头", feature: "松软白嫩，口感蓬松" },
    { name: "包子", feature: "皮薄馅多，种类丰富" },
    { name: "面条", feature: "筋道爽滑，烹饪方式多样" },
    { name: "炒饭", feature: "米饭粒粒分明，口感丰富" },
    { name: "饺子", feature: "皮薄馅多，形状多样" },
    { name: "春卷", feature: "外皮酥脆，内馅丰富" },
    { name: "玉米", feature: "甜嫩多汁，营养丰富" },
    { name: "烧饼", feature: "外皮酥脆，内软香甜" },
    { name: "年糕", feature: "软糯香甜，口感丰富" },
    { name: "馄饨", feature: "皮薄馅多，汤鲜味美" },
    { name: "糍粑", feature: "软糯香甜，口感Q弹" },
    { name: "粽子", feature: "糯米香软，馅料多样" },
    { name: "锅贴", feature: "底部酥脆，内馅鲜美" },
    { name: "油条", feature: "外酥内软，香脆可口" },
    { name: "发糕", feature: "松软香甜，口感蓬松" },
    { name: "烧麦", feature: "皮薄馅多，口感鲜美" },
    { name: "米粉", feature: "滑嫩爽口，吸汁能力强" },
    { name: "粥", feature: "软糯香滑，营养丰富" },
    { name: "窝头", feature: "口感粗犷，香甜可口" },
    { name: "面片", feature: "筋道爽滑，适合煮汤" },
    { name: "葱油饼", feature: "外皮酥脆，葱香浓郁" },
    { name: "煎饼", feature: "外皮酥脆，内馅丰富" },
    { name: "豆腐脑", feature: "滑嫩爽口，搭配调料丰富" },
    { name: "拉面", feature: "筋道爽滑，汤鲜味美" },
    { name: "刀削面", feature: "刀削而成，面条宽厚" },
    { name: "米糕", feature: "松软香甜，口感细腻" },
    { name: "凉皮", feature: "滑嫩爽口，调料丰富" },
    { name: "凉粉", feature: "滑嫩爽口，清凉解暑" },
    { name: "煲仔饭", feature: "锅底焦香，米饭软嫩" },
    { name: "米线", feature: "细长柔滑，汤鲜味美" },
    { name: "虾饺", feature: "皮薄馅多，鲜美多汁" },
    { name: "叉烧包", feature: "外皮松软，叉烧鲜美" },
    { name: "锅盔", feature: "外皮酥脆，内软香甜" },
    { name: "黄米糕", feature: "软糯香甜，口感细腻" },
    { name: "绿豆糕", feature: "细腻香甜，口感清凉" },
    { name: "麻花", feature: "外皮酥脆，内软香甜" },
    { name: "云吞", feature: "皮薄馅多，汤鲜味美" },
    { name: "水饺", feature: "皮薄馅多，煮后鲜美" },
    { name: "火锅", feature: "汤底多样，食材丰富" },
    { name: "手抓饼", feature: "层次分明，外酥内软" },
    { name: "奶黄包", feature: "皮薄馅多，奶香浓郁" },
    { name: "豆沙包", feature: "外皮松软，豆沙香甜" },
    { name: "糯米团", feature: "软糯香甜，口感丰富" },
    { name: "花卷", feature: "松软香甜，形状美观" },
    { name: "豆浆", feature: "香浓可口，营养丰富" },
    { name: "燕麦粥", feature: "软糯香滑，营养健康" },
    { name: "馅饼", feature: "外皮酥脆，馅料丰富" },
    { name: "花生糕", feature: "细腻香甜，花生味浓" },
    { name: "八宝饭", feature: "糯米香软，八宝丰富" },
    { name: "蒸饺", feature: "皮薄馅多，口感鲜美" },
    { name: "酥饼", feature: "外皮酥脆，内馅香甜" },
    { name: "桂花糕", feature: "香甜软糯，桂花清香" },
    { name: "红豆糕", feature: "细腻香甜，红豆味浓" },
    { name: "莲蓉包", feature: "外皮松软，莲蓉香甜" },
    { name: "炸酱面", feature: "面条筋道，酱香浓郁" },
    { name: "油饼", feature: "外皮酥脆，内软香甜" },
    { name: "烧卖", feature: "皮薄馅多，口感鲜美" },
    { name: "红糖发糕", feature: "松软香甜，红糖味浓" },
    { name: "KFC" },
  ];

  const [word, setWord] = useState("快来随机选择食物吧！");
  const timer = useRef();
  const [myWord, setMyWord] = useState("开始");
  const [newWord, setNewWord] = useState("系统推荐");
  const [list, setList] = useState("");
  const getRandomItem = (arr) => {
    if (arr.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * arr.length);

    return arr[randomIndex];
  };
  useEffect(() => {
    newWord == "系统推荐"
      ? setList(cList.map((item) => item.name))
      : Taro.getStorage({
          key: "menu",
          success: function (res) {
            if (res.data) {
              setList(res.data?.split(","));
            }
          },
        });
  }, newWord);
  return (
    <View className="index">
      <View>
        <View
          style={{
            marginBottom: 10,
            textAlign: "center",
            color: "#000",
            fontWeight: 500,
          }}
        >
          {word}
        </View>
        <View style={{ display: "flex" }}>
          <Button
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/menu/index",
              });
            }}
            style={{ marginRight: 10 }}
            className="btn"
          >
            我的菜单
          </Button>
          <Button
            className="btn"
            onClick={() => {
              if (newWord == "系统推荐") {
                setNewWord("自定义");
              } else {
                setNewWord("系统推荐");
              }
            }}
          >
            {newWord}(点击切换)
          </Button>
        </View>
        <View
          onClick={() => {
            if (myWord == "开始") {
              setMyWord("停止");
              timer.current = setInterval(() => {
                setWord(`今天我要吃${getRandomItem(list)}`);
              }, 50);
            } else {
              setMyWord("开始");
              clearInterval(timer.current);
            }
          }}
          style={{ marginTop: 10 }}
        >
          <Button className="btn">{myWord}</Button>
        </View>
      </View>
    </View>
  );
};

export default App;
