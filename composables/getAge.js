export function useGetAge() {
    const dtn = "06/11/2001"

    let today = new Date()
    let year = dtn.substr(6, 4)
    let month = dtn.substr(3, 2)
    let day = dtn.substr(0, 2)
    let birthday = new Date(year + "-" + month + "-" + day)
    let age = today.getFullYear() - birthday.getFullYear()
    let m = today.getMonth() - birthday.getMonth()
    let ageWord = "лет"

    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age = age - 1
    }

    let stringAge = `${age}`;
    if (stringAge.endsWith('1')) {
        ageWord = 'год'
    } else if (stringAge.endsWith('2') || stringAge.endsWith('3') || stringAge.endsWith('4')) {
        ageWord = 'года'
    } else {
        ageWord = 'лет'
    }

    return `${Math.abs(age)} ${ageWord}`;
}
