function stack() {
  this.top = null;
  this.count = 0;
  this.length = function () {
    this.count.length;
  };
  this.push = function (data) {
    var newNode = {
      data: data,
      next: null,
    };
    newNode.next = this.top;
    this.top = newNode;
  };
  this.pop = function () {
    if (this.top === null) {
      return null;
    } else {
      var out = this.top;
      this.top = this.top.next;
      this.count--;
      return out;
    }
  };
}

const st = new stack();

st.push(15);
st.push(20);
st.push(25)
st.pop();
console.log(st);
