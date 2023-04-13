enum MyEnum {
    First,
    Second
}

// https://stackoverflow.com/questions/44243060/use-enum-as-restricted-key-type-in-typescript
// in Enum vs keyof typeof Enum
// in Enum compiles to enum values and keyof typeof to enum keys.
// With keyof typeof, you cannot change the enum properties:
let obj: { [key in  MyEnum]?: any} = { [MyEnum.First]: 1 };

let obj1: { [key in keyof typeof MyEnum]?: any} = { First: 1 };


// 根据 enum 生成 union
// enum 的 key 值 union
enum Weekday {
    Mon = 1,
    Tue = 2,
    Wed = 3
  }
type WeekdayName = keyof typeof Weekday // 'Mon' | 'Tue' | 'Wed'
const lit = <V extends keyof any>(v: V) => v;
// enum 无法实现value-union , 但可以 object 的 value 值 union
const weekdayObj = {
  MONDAY: lit(1),
  TUESDAY: lit(2),
  WEDNESDAY: lit(3)
}
type weekdayObj = (typeof weekdayObj)[keyof typeof weekdayObj] // 1|2|3