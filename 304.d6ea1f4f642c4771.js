"use strict";(self.webpackChunkFoodie=self.webpackChunkFoodie||[]).push([[304],{7304:(v,C,g)=>{g.r(C),g.d(C,{ContactModule:()=>h});var P=g(5601),a=g(2382),M=g(9808),i=g(3902),n=g(1223),_=g(4961),s=g(9783),d=g(2340),p=g(520);let m=(()=>{class t{constructor(o){this.http=o,this.apiURLMessages=d.N.apiURL+"messages"}createMessage(o){return this.http.post(this.apiURLMessages,o)}}return t.\u0275fac=function(o){return new(o||t)(n.LFG(p.eN))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function l(t,c){1&t&&(n.TgZ(0,"p",32),n._uU(1," Please Fill All Inputs "),n.qZA())}let f=(()=>{class t{constructor(o,e,r,O){this.userService=o,this.messageService=e,this.contactMessageService=r,this.router=O,this.isSubmitted=!1}ngOnInit(){this.user=this.userService.user}sendMessage(o){this.isSubmitted=!0,o.invalid||this.contactMessageService.createMessage({user:this.user,firstName:o.value.firstName,lastName:o.value.lastName,email:o.value.email,phone:o.value.phone,details:o.value.message}).subscribe(r=>{this.messageService.add({severity:"success",summary:r.summary,detail:r.detail}),this.router.navigateByUrl("/")})}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(_.f),n.Y36(s.ez),n.Y36(m),n.Y36(i.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-contact-content"]],decls:46,vars:5,consts:[[1,"contact-content"],[1,"container"],[1,"card"],[1,"form"],[3,"ngSubmit"],["contactForm","ngForm"],["data-aos","fade-right","data-aos-duration","2000",1,"name"],["type","text","placeholder","Your First Name","name","firstName","required","",1,"firstNameInput",3,"ngModel"],["type","text","placeholder","Your Last Name","name","lastName","required","",1,"lastNameInput",3,"ngModel"],["data-aos","fade-left","data-aos-duration","2000",1,"email"],["type","email","placeholder","Your Email Address","name","email","required","","email","",1,"emailInput",3,"ngModel"],["data-aos","fade-right","data-aos-duration","2000",1,"phone"],["type","text","placeholder","Your Phone Number","name","phone","required","","onkeypress","return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))",1,"phoneInput",3,"ngModel"],["data-aos","fade-left","data-aos-duration","2000",1,"message"],["placeholder","How Can We Help?","cols","30","rows","8","name","message","required","","ngModel","",1,"messageInput"],["data-aos","fade-right","data-aos-duration","2000",1,"submit-error"],["type","submit",1,"submit-btn"],["class","error",4,"ngIf"],["data-aos","fade-left","data-aos-duration","2000",1,"info"],[1,"details"],[1,"title"],[1,"text"],[1,"phone"],[1,"pi","pi-phone"],[1,"email"],[1,"pi","pi-envelope"],[1,"website"],[1,"pi","pi-globe"],[1,"social"],[1,"pi","pi-facebook"],[1,"pi","pi-twitter"],[1,"pi","pi-instagram"],[1,"error"]],template:function(o,e){if(1&o){const r=n.EpF();n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4"),n._uU(5,"Send A Message"),n.qZA(),n.TgZ(6,"form",4,5),n.NdJ("ngSubmit",function(){n.CHM(r);const b=n.MAs(7);return e.sendMessage(b)}),n.TgZ(8,"div",6),n._UZ(9,"input",7)(10,"input",8),n.qZA(),n.TgZ(11,"div",9),n._UZ(12,"input",10),n.qZA(),n.TgZ(13,"div",11),n._UZ(14,"input",12),n.qZA(),n.TgZ(15,"div",13),n._UZ(16,"textarea",14),n.qZA(),n.TgZ(17,"div",15)(18,"button",16),n._uU(19,"SUBMIT"),n.qZA(),n.YNc(20,l,2,0,"p",17),n.qZA()()(),n.TgZ(21,"div",18)(22,"div",19)(23,"h4",20),n._uU(24,"Get In Touch"),n.qZA(),n.TgZ(25,"p",21),n._uU(26,"Don't be shy, Give us a call or drop us a line"),n.qZA()(),n._UZ(27,"hr"),n.TgZ(28,"h4"),n._uU(29,"Contact Info"),n.qZA(),n.TgZ(30,"div",22),n._UZ(31,"i",23),n.TgZ(32,"p",21),n._uU(33,"010 999 9999"),n.qZA()(),n.TgZ(34,"div",24),n._UZ(35,"i",25),n.TgZ(36,"p",21),n._uU(37,"Foodie@gmail.com"),n.qZA()(),n.TgZ(38,"div",26),n._UZ(39,"i",27),n.TgZ(40,"p",21),n._uU(41,"Foodie.com"),n.qZA()(),n.TgZ(42,"div",28),n._UZ(43,"i",29)(44,"i",30)(45,"i",31),n.qZA()()()()()}if(2&o){const r=n.MAs(7);n.xp6(9),n.Q6J("ngModel",null==e.user?null:e.user.firstName),n.xp6(1),n.Q6J("ngModel",null==e.user?null:e.user.lastName),n.xp6(2),n.Q6J("ngModel",null==e.user?null:e.user.email),n.xp6(2),n.Q6J("ngModel",null==e.user?null:e.user.phone),n.xp6(6),n.Q6J("ngIf",r.invalid&&e.isSubmitted)}},directives:[a._Y,a.JL,a.F,a.Fj,a.Q7,a.JJ,a.On,a.on,M.O5],styles:['.contact-content[_ngcontent-%COMP%]{min-height:100vh;background:url(assets/contact-background.svg);background-repeat:no-repeat;background-size:cover;background-position:center}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{min-height:100vh;display:flex;justify-content:center;padding-top:170px;padding-bottom:100px;color:#fff}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;background-color:#22222a;border-top-left-radius:60px;border-bottom-right-radius:60px;overflow:hidden;position:relative;height:-moz-fit-content;height:fit-content}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:before, .contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:after{content:"";position:absolute;width:32px;height:32px;background-color:#168c42}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:after{right:0;bottom:0}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{width:600px;padding:30px 35px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 30px;font-size:20px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:15px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{display:flex;gap:20px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .firstNameInput[_ngcontent-%COMP%]{width:600px;padding:20px 15px;border-radius:10px;outline:0;border:3px solid #22222a;transition:.3s}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .firstNameInput[_ngcontent-%COMP%]:focus{border-color:#168c42}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .firstNameInput[_ngcontent-%COMP%]::placeholder{color:#868383}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .lastNameInput[_ngcontent-%COMP%]{width:600px;padding:20px 15px;border-radius:10px;outline:0;border:3px solid #22222a;transition:.3s}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .lastNameInput[_ngcontent-%COMP%]:focus{border-color:#168c42}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .lastNameInput[_ngcontent-%COMP%]::placeholder{color:#868383}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   .emailInput[_ngcontent-%COMP%]{width:100%;padding:20px 15px;border-radius:10px;outline:0;border:3px solid #22222a;transition:.3s}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   .emailInput[_ngcontent-%COMP%]:focus{border-color:#168c42}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   .emailInput[_ngcontent-%COMP%]::placeholder{color:#868383}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   .phoneInput[_ngcontent-%COMP%]{width:100%;padding:20px 15px;border-radius:10px;outline:0;border:3px solid #22222a;transition:.3s}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   .phoneInput[_ngcontent-%COMP%]:focus{border-color:#168c42}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   .phoneInput[_ngcontent-%COMP%]::placeholder{color:#868383}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .messageInput[_ngcontent-%COMP%]{width:100%;padding:20px 15px;border-radius:10px;outline:0;border:3px solid #22222a;transition:.3s}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .messageInput[_ngcontent-%COMP%]:focus{border-color:#168c42}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .messageInput[_ngcontent-%COMP%]::placeholder{color:#868383}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-error[_ngcontent-%COMP%]{display:flex;align-items:center}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-error[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;border:0;cursor:pointer;font-weight:500;padding:12px 40px;border-bottom-left-radius:20px;border-top-right-radius:20px;color:#fff;background-color:#168c42;transition:.3s}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-error[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover{border-radius:20px 0/20px 0px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-error[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{margin:0;flex:1;text-align:center;color:#cf2323;font-weight:600;font-size:22px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{background-color:#000;flex:1;border-bottom-right-radius:60px;padding:30px 35px;font-size:20px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin:0 0 20px;font-size:20px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin:0;font-size:20px;line-height:1.5}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{height:3px;background-color:#168c42;border:none;margin:50px 0}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 30px;font-size:20px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]{margin-bottom:20px;display:flex}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:15px;color:#168c42;font-size:20px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin:0}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]{display:flex;margin-bottom:20px;align-items:center}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:15px;color:#168c42;font-size:20px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin:0}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .website[_ngcontent-%COMP%]{display:flex;align-items:center}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .website[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:15px;color:#168c42;font-size:20px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .website[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin:0}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]{margin-top:70px;margin-bottom:50px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:30px;margin-right:30px;cursor:pointer;transition:.3s}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#168c42}.ng-touched.ng-invalid[_ngcontent-%COMP%]:not(form){border:3px solid #a83232!important}@media (max-width: 992px){.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{padding-top:150px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{width:600px;padding:15px 35px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 20px;text-align:center}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{flex-direction:column;gap:15px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{flex-direction:column;gap:17px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .firstNameInput[_ngcontent-%COMP%], .contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .lastNameInput[_ngcontent-%COMP%]{width:100%;padding:20px 15px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   .emailInput[_ngcontent-%COMP%], .contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   .phoneInput[_ngcontent-%COMP%]{padding:20px 15px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .messageInput[_ngcontent-%COMP%]{padding:10px 15px;height:100px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-error[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{font-size:18px}}@media (max-width: 772px){.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{flex-direction:column}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{justify-content:center;max-width:100%}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{gap:17px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .firstNameInput[_ngcontent-%COMP%], .contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .lastNameInput[_ngcontent-%COMP%], .contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   .emailInput[_ngcontent-%COMP%], .contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   .phoneInput[_ngcontent-%COMP%], .contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .messageInput[_ngcontent-%COMP%]{padding:10px 15px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-error[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{padding:10px 20px;font-size:12px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-error[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{font-size:15px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{padding:20px 35px;position:relative}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin:0 0 10px;font-size:16px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin:0;font-size:13px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin:10px 0}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 15px;font-size:16px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]{margin-bottom:10px;display:flex;align-items:center}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:15px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]{display:flex;margin-bottom:10px;align-items:center}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:15px;font-size:20px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin:0;font-size:15px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .website[_ngcontent-%COMP%]{display:flex;align-items:center}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .website[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:15px;font-size:20px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .website[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin:0;font-size:15px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]{position:absolute;top:30px;display:flex;flex-direction:column;gap:20px;right:20px}.contact-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px}}']}),t})();const u=[{path:"",component:(()=>{class t{constructor(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-contact"]],decls:2,vars:0,consts:[[1,"contact"]],template:function(o,e){1&o&&(n.TgZ(0,"div",0),n._UZ(1,"app-contact-content"),n.qZA())},directives:[f],styles:[".contact[_ngcontent-%COMP%]{position:relative;min-height:100vh}"]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[i.Bz.forChild(u)],i.Bz]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({providers:[],imports:[[M.ez,a.u5,P.m,x]]}),t})()}}]);