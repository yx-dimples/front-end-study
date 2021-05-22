enum Gender {
    Male,
    Female = 1
}
let i:{name: string,gender: Gender};
i = {
    name: '猪八戒',
    gender: Gender.Male
};
console.log(i.gender == Gender.Male);

type myType = string;
let f : myType;
f = '233';