import { View, Button, Textarea } from "@tarojs/components";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import "./index.scss";

const App = () => {
  useEffect(() => {
    Taro.getStorage({
      key: "menu",
      success: function (res) {
        if (res.data) {
          setValue(res.data);
        }
      },
    });
  }, []);
  const [value, setValue] = useState();
  return (
    <View className="index">
      <Textarea
        value={value}
        onInput={(value) => {
          setValue(value.detail.value);
        }}
        maxlength={-1}
        className="text"
        placeholder="菜品名请用逗号分隔"
        style={{ background: "#fff", width: "100vw" }}
      />

      <View style={{ position: "absolute", bottom: "0", width: "100vw" }}>
        <Button
          className="btn"
          onClick={() => {
            console.log(value, "value");
            Taro.setStorage({ key: "menu", data: value });
            Taro.navigateBack();
          }}
        >
          保存并返回
        </Button>
      </View>
    </View>
  );
};

export default App;
