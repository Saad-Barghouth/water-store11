
// site-dark.js - interactions for Barghouth dark site
const CART_KEY = "barghouth_dark_cart_v1";
function loadCart(){ try{return JSON.parse(localStorage.getItem(CART_KEY))||{}}catch(e){return{}} }
function saveCart(c){ localStorage.setItem(CART_KEY, JSON.stringify(c)) }
function updateCartCount(){ const cart = loadCart(); let count=0; for(const id in cart) count+=cart[id].qty; document.querySelectorAll('#cart-count').forEach(el=>el.innerText=count); }
function openCart(e){ e && e.preventDefault && e.preventDefault(); document.getElementById('cart-drawer').classList.add('open'); renderCart(); }
function closeCart(){ document.getElementById('cart-drawer').classList.remove('open'); }

function productCard(p){ return `<div class='card'><img src='${p.image}' alt='${p.name}' onerror="this.style.opacity=0.6"><h4>${p.name}</h4><p class='muted'>${p.size} • ${p.pack}</p><p class='muted'>بلد المنشأ: ${p.origin}</p><div class='meta'><span class='price'>${formatPrice(p.price)}</span><div><button class='btn' onclick="viewProduct('${p.id}')">عرض</button><button class='btn' style='margin-left:8px' onclick="addToCart('${p.id}',1)">أضف للسلة</button></div></div></div>` }

function renderFeatured(){ const el = document.getElementById('featured'); if(!el) return; el.innerHTML=''; BAR_PRODUCTS.slice(0,6).forEach(p=> el.innerHTML += productCard(p)); }
function renderGrid(){ const grid = document.getElementById('product-grid'); if(!grid) return; grid.innerHTML=''; BAR_PRODUCTS.forEach(p=> grid.innerHTML += productCard(p)); }
function viewProduct(id){ window.location.href = 'product.html?id='+encodeURIComponent(id); }
function renderProductPage(){ const wrap = document.getElementById('product-page'); if(!wrap) return; const params = new URLSearchParams(location.search); const id = params.get('id'); const p = getProductById(id); if(!p){ wrap.innerHTML='<p>منتج غير موجود</p>'; return;} wrap.innerHTML = `<div class='product-page'><div><img src='${p.image}' alt='${p.name}'></div><div><h2>${p.name}</h2><p class='muted'>${p.desc}</p><p><strong>${p.size} • ${p.pack}</strong></p><p style='margin-top:1rem'><strong>السعر: ${formatPrice(p.price)}</strong></p><div style='margin-top:1rem'><label>الكمية <input type='number' id='prod-qty' value='1' min='1' style='width:90px'></label></div><div style='margin-top:1rem'><button class='btn' onclick="addToCart('${p.id}', parseInt(document.getElementById('prod-qty').value))">أضف للسلة</button><button class='btn' style='margin-left:8px' onclick="buyNow('${p.id}')">اشتري الآن</button></div></div></div>`; }

function renderCart(){ const container = document.getElementById('cart-items'); if(!container) return; const cart = loadCart(); container.innerHTML=''; let total=0; for(const id in cart){ const item = cart[id]; const p = getProductById(id); if(!p) continue; total += p.price * item.qty; const div = document.createElement('div'); div.className='cart-item'; div.innerHTML = `<img src='${p.image}' style='width:64px;height:64px;border-radius:8px;object-fit:cover'><div style='flex:1;text-align:right'><strong>${p.name}</strong><div>${p.size}</div><div>الكمية: <input type='number' min='1' value='${item.qty}' style='width:70px' onchange="changeQty('${id}', this.value)"></div></div><div style='text-align:left'><div>${formatPrice(p.price * item.qty)}</div><div style='margin-top:6px'><button class='btn' onclick="removeFromCart('${id}')">حذف</button></div></div>`; container.appendChild(div); } document.getElementById('cart-total').innerText = formatPrice(total); document.getElementById('checkout-total') && (document.getElementById('checkout-total').innerText = formatPrice(total)); updateCartCount(); }

function addToCart(id, qty){ qty = qty||1; const p = getProductById(id); if(!p) return alert('منتج غير متوفر'); const cart = loadCart(); if(!cart[id]) cart[id]={qty:0}; if(cart[id].qty + qty > p.stock) return alert('الكمية أكبر من المخزون'); cart[id].qty += qty; saveCart(cart); renderCart(); updateCartCount(); }

function changeQty(id, q){ q = parseInt(q)||1; const cart = loadCart(); const p = getProductById(id); if(q > p.stock) return alert('أكبر من المخزون'); cart[id].qty = q; if(cart[id].qty<=0) delete cart[id]; saveCart(cart); renderCart(); updateCartCount(); }

function removeFromCart(id){ const cart = loadCart(); delete cart[id]; saveCart(cart); renderCart(); updateCartCount(); }

function buyNow(id){ addToCart(id,1); window.location.href='checkout.html'; }

function checkoutSubmit(){ const form = document.getElementById('checkout-form'); if(!form) return; form.addEventListener('submit', function(e){ e.preventDefault(); const data = new FormData(form); const order = {id:'B'+Date.now(), name:data.get('name'), phone:data.get('phone'), address:data.get('address'), payment:data.get('payment'), items: loadCart()}; localStorage.removeItem(CART_KEY); updateCartCount(); alert('تم إنشاء الطلب بنجاح\nرقم الطلب: '+order.id); window.location.href='index.html'; }); }

// search & filters & init
function initSite(){ document.getElementById('search') && document.getElementById('search').addEventListener('input', (e)=>{ const q=e.target.value.toLowerCase(); const grid = document.getElementById('product-grid'); if(!grid) return; grid.innerHTML=''; BAR_PRODUCTS.filter(p=>p.name.toLowerCase().includes(q) || p.size.includes(q)).forEach(p=> grid.innerHTML += productCard(p)); }); document.getElementById('size-filter') && document.getElementById('size-filter').addEventListener('change', (e)=>{ const v=e.target.value; const grid=document.getElementById('product-grid'); grid.innerHTML=''; BAR_PRODUCTS.filter(p=> !v || p.size===v).forEach(p=> grid.innerHTML += productCard(p)); }); renderFeatured(); renderGrid(); renderCart(); renderProductPage(); checkoutSubmit(); }

document.addEventListener('DOMContentLoaded', initSite);
