import "./App.css"
import { AddTransaction } from "./components/addtransaction";
import {Balance} from "./components/balance";
import Header from "./components/header";
import { IncomeExpenseContainer } from "./components/incomeexpensecontainer";
import { Transactionlist } from "./components/transactionlist";
import { GlobalProvider } from "./context/GlobalState";

function App() {
return (
<GlobalProvider>
<Header/>
<Balance/>
<IncomeExpenseContainer/>
<Transactionlist/>
<AddTransaction/>
</GlobalProvider>
);
}

export default App;