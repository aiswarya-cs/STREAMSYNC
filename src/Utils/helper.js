var nameList = [
    'vava', 'jishor', 'vivek', 'chinnan',
    'Fasil', 'Fagath', 'Sagar', 'appu😌', 'Power', 'vishnu',
    'Fazy🤥', 'Jeevan', 'Carlose', 'Mohan', 'Raju', 'Rakhav', 'Blue',
    'George', 'rahul', 'Gopal', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'nimmy', 'Bandit',
    'fazana', 'anju', 'anu', 'rithu', 'Deep', 'Deeper', 'Deepest',
    'Monu', 'surya', 'justin', 'renju', 'Hariis', 'vishnu', 'Vidhu',
    'das', 'aswin😜', 'vabhu', 'navaneeth', 'naveen 🥵', 'kannan', 'unni',
    'akash', 'nikhil', '', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Dasappan', 'musakka', 'mammootty', 'lal', 'rossy', 'pka', 'Big',
    'Small', 'Short', 'Togin', 'Sathi', 'sijo', 'amal', 'aju', 'madhu',
    'Sad', 'Happy', 'Joy', 'aleesha', 'varsha', 'vivak', 'Dasappan', 'sethupathuu',
    'Lie', 'Honest', 'leo', 'rolex', 'vikram', 'Eagle😵', 'danthanam', 'vijay',
    'vichu', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'ramanan 😐', 'rockey', 'roshan', 'roxan', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
  ];

 export function generateRandomname() {
  return nameList[Math.floor(Math.random() * nameList.length)];
};

export function generateRandomMessages(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXY🤑Zabcdefghijklmnopqrstuvwxyz012345678🤑9';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
