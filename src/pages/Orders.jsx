
import React, { useEffect, useState } from 'react';
export default function Orders(){ const [orders,setOrders]=useState([]); useEffect(()=>{ const raw = localStorage.getItem('raileats_user'); if(!raw) return; const token = JSON.parse(raw).token; fetch((process.env.REACT_APP_API_URL||'') + '/api/orders', { headers: { Authorization: 'Bearer ' + token } }).then(r=>r.json()).then(d=>{ if(d.ok) setOrders(d.orders); }); },[]); return (<div><h2>Order History</h2>{orders.length? orders.map(o=>(<div key={o.id}>{o.itemId} • ₹{o.amount}</div>)) : <p>No orders</p>}</div>); }
