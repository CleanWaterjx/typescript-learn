// 数组元素提取第一个元素的类型
type FirstType<T extends unknown[]> = T extends [infer a, ...unknown[]] ? a : never;

type first = FirstType<[1, 2]>;
//   ^? type first = 1