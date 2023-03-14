import React,{useContext, useState} from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
const [text,setText] = useState('');
const [amount, setAmount] = useState(0)
const {transactions, addTransaction} = useContext(GlobalContext)
let ids = transactions.map(transaction => transaction.id)
const FormSubmit =e =>{
e.preventDefault()
const newTransaction = {
id: Math.max(...ids) + 1,
text,
amount: +amount
}
addTransaction(newTransaction)
}

return(
<div>
<h3>Add new transaction</h3>
<form id="form" onSubmit={FormSubmit}>
<div class="form-control">
<label for="text">Text</label>

<input type="text"value={text} onChange={(e)=> {setText(e.target.value)}} placeholder="Enter
text..." />
</div>
<div class="form-control">
<label for="amount">
Amount <br />
(negative - expense, positive - income)
</label>
<input type="number" value={amount} onChange={(e) => {setAmount(e.target.value)}}
placeholder="Enter amount..." />
</div>
<button class="btn">Add transaction</button>
</form>
</div>
)
}