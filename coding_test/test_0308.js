function solution4(history, infected) {
  let building = {};
  let contact = [];
  for(const person of history) {
    // 한 번 접촉된 사람들이 다시 건물에 들어오면 무시
    console.log(person, building, contact)
    if(contact.includes(person)) continue;
    if(person < 0) {
      delete building[-person];
      continue;
    }
    if(person === infected) {
        const contacts = Object.keys(building)
        for(let i = 0; i < contacts.length; i++) {
          if(contact.includes(Number(contacts[i]))) continue
          contact.push(Number(contacts[i]));
        }
    } else if(building[infected]) {
        contact.push(person)
    }
    building[person] = true
  }
  return contact.sort((a, b) => a-b)
}

console.log(solution([1, 2, 3, -2, 6, -1, -6, 6, 2, -3, 1, -6, -1, -2], 2))