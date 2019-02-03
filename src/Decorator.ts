
function hello (constructFn: Function): void {
  // do something
  console.log(constructFn)
}
function hello2 (constructFn: Function): void {
  alert(constructFn)
}
function helloFactory (show: boolean) {
  if (show) return hello
  else return hello2
}

@helloFactory(true)
class Cafe {}

new Cafe()
