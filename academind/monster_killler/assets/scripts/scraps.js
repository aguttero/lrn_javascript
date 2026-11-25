function getName() {
  return prompt('Your name: ', 'Somename');
}

function greet() {
  const userName = getName();
  console.log('Hello ' + userName);
}

greet();
