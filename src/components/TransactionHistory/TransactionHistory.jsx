import Transaction from "../Transaction/Transaction"
import css from './TransactionHistory.module.css'

const TransactionHistory = (({items}) => {
    return (
        <table className={css.table}>
            <thead>
                <tr>
                    <th className={css.th}>Type</th>
                    <th className={css.th}>Amount</th>
                    <th className={css.th}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({id, type, amount, currency}) => {
                    return  <tr key={id} className={css.tr}>
                                <Transaction type={type}
                                amount={amount}
                                currency={currency}/>
                            </tr>
                    })
                }
            </tbody>
        </table>
    )
})

export default TransactionHistory