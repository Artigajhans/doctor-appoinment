import{r as n,j as e,h as K,i as W,k as Z,l as q,m as J}from"./index-poiuNOaa.js";import{u as M,c as $,B as U}from"./Button-BpiecJEl.js";const B=n.forwardRef(({bsPrefix:r,bg:i="primary",pill:p=!1,text:l,className:x,as:c="span",...f},s)=>{const m=M(r,"badge");return e.jsx(c,{ref:s,...f,className:$(x,m,p&&"rounded-pill",l&&`text-${l}`,i&&`bg-${i}`)})});B.displayName="Badge";const I=n.forwardRef(({bsPrefix:r,variant:i,animation:p="border",size:l,as:x="div",className:c,...f},s)=>{r=M(r,"spinner");const m=`${r}-${p}`;return e.jsx(x,{ref:s,...f,className:$(c,m,l&&`${m}-${l}`,i&&`text-${i}`)})});I.displayName="Spinner";const ee=()=>{var y;const[r,i]=n.useState([]),{id:p}=K(),[l,x]=n.useState(""),[c,f]=n.useState({}),{data:s,isSuccess:m}=W(p,{skip:!p}),{data:d,isSuccess:N}=Z();console.log(d);const[w,{isLoading:D}]=q(),[T]=J(),E=new Date().toISOString().split("T")[0],[o,j]=n.useState({doctorId:"",date:E,timeSlot:""}),C=t=>{const a={};return t.forEach(({day:g,startTime:u,endTime:L})=>{let k=[],[P,R]=u.split(":").map(Number),[_,z]=L.split(":").map(Number),h=new Date;h.setHours(P,R,0);let A=new Date;for(A.setHours(_,z,0);h<A;){let b=h.getHours(),v=h.getMinutes(),Q=b>=12?"PM":"AM",S=b>12?b-12:b;S=S===0?12:S;const G=`${S}: ${v===0?"00":v} ${Q}`;k.push(G),h.setMinutes(h.getMinutes()+30)}a[g]=k}),a},H=t=>{j({...o,[t.target.name]:t.target.value})},F=t=>{j(a=>({...a,timeSlot:t}))},O=t=>{var a;if(t.preventDefault(),!o.doctorId||!o.date||!o.timeSlot){alert("Please fill all fields!");return}w(o),j({doctorId:((a=s==null?void 0:s.result)==null?void 0:a._id)||"",date:"",timeSlot:""})};return n.useEffect(()=>{m&&(s!=null&&s.result)&&(j(t=>({...t,doctorId:s.result._id})),f(C(s.result.schedule)))},[m,s]),n.useEffect(()=>{if(o.date){const a=new Date(o.date).toLocaleDateString("en-IN",{weekday:"long",timeZone:"Asia/Kolkata"});x(a)}},[o.date]),n.useEffect(()=>{var t,a;if(N&&((t=d==null?void 0:d.result)!=null&&t.length)){const g=d.result.filter(u=>u.date===o.date).map(u=>u.timeSlot);i(((a=c[l])==null?void 0:a.filter(u=>!g.includes(u)))||[])}else i(c[l]||[])},[N,d,o.date,l,c]),e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"Book Appointment"}),e.jsxs("form",{onSubmit:O,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"doctorName",children:"Doctor"}),e.jsx("input",{type:"text",className:"form-control",name:"doctorName",value:((y=s==null?void 0:s.result)==null?void 0:y.name)||"",readOnly:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"date",children:"Date"}),e.jsx("input",{type:"date",className:"form-control",name:"date",value:o.date,onChange:H})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Select Time Slot"}),e.jsx("div",{className:"d-flex flex-wrap gap-2",children:r.length>0?r.map((t,a)=>e.jsx(B,{className:`badge-pill p-2 m-1 ${o.timeSlot===t?"bg-primary":"bg-secondary"}`,style:{cursor:"pointer"},onClick:()=>F(t),children:t},a)):e.jsxs("p",{className:"text-danger",children:["No slots available for ",l]})})]}),e.jsx(U,{type:"submit",className:"btn btn-primary mt-3",disabled:D,children:D?e.jsx(I,{animation:"border",size:"sm"}):"Book Appointment"})]}),d&&e.jsxs("table",{className:"table table-bordered table-striped table-hover p-2 mt-4",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Doctor Name"}),e.jsx("th",{children:"Doctor Email"}),e.jsx("th",{children:"Doctor Mobile"}),e.jsx("th",{children:"Doctor Specialization"}),e.jsx("th",{children:"Time Slot"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:d.result.map((t,a)=>e.jsxs("tr",{children:[e.jsx("td",{children:t.doctorId.name}),e.jsx("td",{children:t.doctorId.email}),e.jsx("td",{children:t.doctorId.mobile}),e.jsx("td",{children:t.doctorId.specialization}),e.jsx("td",{children:t.timeSlot}),e.jsx("td",{children:e.jsx("button",{onClick:()=>T(t._id),className:"btn btn-danger btn-sm",children:"Cancel Appointment"})})]},a))})]})]})};export{ee as default};
