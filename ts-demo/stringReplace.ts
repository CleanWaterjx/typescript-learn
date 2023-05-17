/*
 * @Author: yujinxiong
 * @Date: 2023-05-17 15:52:59
 * @Description: file content
 * @LastEditors: 余锦雄
 */
// 字符串替换 https://juejin.cn/post/7230469903122284599#heading-12
type ReplaceStr<
  str extends string,
  currentStr extends string,
  replaceStr extends string
> = str extends `${infer prefix}${currentStr}${infer suffix}`
  ? `${prefix}${replaceStr}${suffix}`
  : str;

type replaceStr1 = ReplaceStr<"helloworld", "world", "ts">;
//   ^? type replaceStr1 = 'hellots'
type replaceStr2 = ReplaceStr<"helloworld", "ts", "world">;
//   ^? type replaceStr1 = 'helloworld'
