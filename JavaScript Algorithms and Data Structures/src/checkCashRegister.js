/**
 * Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
 */

function checkCashRegister(price, cash, cid) {
  const coinValue = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    'ONE HUNDRED': 100,
  };
  let status = '';
  let change = [];
  let totalChange = cash - price;
  let totalCashInDrawer = 0;
  for (let index = cid.length - 1; index >= 0; index--) {
    const cashInDrawer = cid[index];
    const [currency, value] = cashInDrawer;
    const currencyValue = coinValue[currency];
    totalCashInDrawer += value;
    if (currencyValue <= totalChange) {
      const amount = Math.floor(totalChange / currencyValue);
      let total = 0;
      if (amount * currencyValue > value) {
        total = value;
      } else {
        total = amount * currencyValue;
      }
      change.push([currency, total]);
      totalChange = Number.parseFloat(totalChange - total).toFixed(3);
    }
  }

  if (cash - price === totalCashInDrawer) {
    return {
      status: 'CLOSED',
      change: cid,
    };
  }

  if (totalChange > 0) {
    return {
      status: 'INSUFFICIENT_FUNDS',
      change: [],
    };
  } else {
    status = 'OPEN';
  }

  return {
    status: status,
    change: change,
  };
}

module.exports = checkCashRegister;
