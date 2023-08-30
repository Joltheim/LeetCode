/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
function splitListToParts(head, k) {
    let newArray = [];

    let headLength = head.length
    console.log("headLength = " + headLength)

    let partNumber= Math.floor(headLength / k)
    console.log("partNumber = " + partNumber)

    head.split()

    console.log(newArray)
};

//test
splitListToParts([1,2,3,4,5,6,7], 4)

//expected outcome
//[[1],[2],[3],[],[]]