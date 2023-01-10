const Node = function (val) {
  this.val = val;
  this.next = null;
};

const MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

MyLinkedList.prototype.getNode = function (index) {
  let currNode = this.head;
  let currIndex = 0;
  while (currIndex < index) {
    currIndex++;
    currNode = currNode.next;
  }
  return currNode;
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  return this.getNode(index).val;
};

MyLinkedList.prototype.initNode = function (node) {
  this.head = node;
  this.tail = node;
  this.size = 1;
};

MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);

  if (!this.head) {
    this.initNode(newNode);
    return;
  }

  const prevHead = this.head;
  this.head = newNode;
  this.head.next = prevHead;
  this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val);

  if (!this.tail) {
    this.initNode(newNode);
    return;
  }

  this.tail.next = newNode;
  this.tail = newNode;
  this.size++;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;

  const newNode = new Node(val);

  if (!this.head) {
    this.initNode(newNode);
    return;
  }

  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  if (index === this.size) {
    this.addAtTail(val);
    return;
  }

  const prevNode = this.getNode(index - 1);
  const indexNode = prevNode.next;

  prevNode.next = newNode;
  newNode.next = indexNode;
  this.size++;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    return;
  }

  const prevNode = this.getNode(index - 1);

  if (index === this.size - 1) {
    this.tail = prevNode;
    this.size--;
    return;
  }

  const indexNode = prevNode.next;
  const nextNode = indexNode.next;

  prevNode.next = nextNode;
  this.size--;
};