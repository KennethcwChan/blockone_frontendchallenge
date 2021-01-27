const archivedData = [
  {
    id: 't1',
    timestamp: '2020-10-18',
    action: 'DEBIT',
    description: 'Utilities Bill',
    amount: 125,
    currency: 'SGD',
  },
  {
    id: 't2',
    timestamp: '2020-10-15',
    action: 'DEBIT',
    description: 'Telco Bill',
    amount: 25,
    currency: 'SGD',
  },
  {
    id: 't3',
    timestamp: '2020-10-11',
    action: 'DEBIT',
    description: 'Restaurant X',
    amount: 13,
    currency: 'SGD',
  },
  {
    id: 't4',
    timestamp: '2020-10-11',
    action: 'DEBIT',
    description: 'Cafe Y',
    amount: 7.89,
    currency: 'SGD',
  },
  {
    id: 't5',
    timestamp: '2020-10-05',
    action: 'DEBIT',
    description: 'Bookstore',
    amount: 47.55,
    currency: 'SGD',
  },
  {
    id: 't6',
    timestamp: '2020-10-01',
    action: 'CREDIT',
    description: 'From John',
    amount: 164,
    currency: 'SGD',
  },
  {
    id: 't7',
    timestamp: '2020-09-27',
    action: 'CREDIT',
    description: 'Amazon Refund',
    amount: 213.25,
    currency: 'USD',
  },
  {
    id: 't8',
    timestamp: '2020-09-25',
    action: 'CREDIT',
    description: 'Youtube ads payment',
    amount: 300,
    currency: 'USD',
  },
  {
    id: 't9',
    timestamp: '2020-09-25',
    action: 'DEBIT',
    description: 'Bar T',
    amount: 47.13,
    currency: 'SGD',
  },
  {
    id: 't10',
    timestamp: '2020-09-24',
    action: 'DEBIT',
    description: 'Subscription',
    amount: 17.99,
    currency: 'SGD',
  },
];

// archivedData.sort(function (a, b) {
//   return new Date(a.timestamp) - Date(b.timestamp);
// });
export default archivedData;
