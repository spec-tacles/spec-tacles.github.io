"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[128],{1143:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],i={slug:"/",id:"introduction",title:"Introduction"},l={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"Spectacles is a distributed Discord bot framework.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/spec-tacles/website/edit/master/website/docs/introduction.md",version:"current",frontMatter:{slug:"/",id:"introduction",title:"Introduction"},sidebar:"docs",next:{title:"Ping Pong",permalink:"/docs/ping_pong"}},c=[{value:"Message Broker",id:"message-broker",children:[]},{value:"Command Handler",id:"command-handler",children:[]},{value:"Proxy",id:"proxy",children:[]},{value:"Gateway",id:"gateway",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],d={toc:c};function p(e){var t=e.components,i=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Spectacles is a distributed Discord bot framework."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Architecture",src:n(654).Z})),(0,r.kt)("p",null,"A basic Spectacles bot runs 4 services:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Gateway"),(0,r.kt)("li",{parentName:"ol"},"Proxy"),(0,r.kt)("li",{parentName:"ol"},"Message broker"),(0,r.kt)("li",{parentName:"ol"},"Command handler")),(0,r.kt)("p",null,"The Spectacles organization provides the gateway, proxy and broker services. You are responsible for\nwriting your own command handler (that's why you're here, after all)."),(0,r.kt)("p",null,"Each of these services is fully stateless and can be easily scaled up or down across machines."),(0,r.kt)("h2",{id:"message-broker"},"Message Broker"),(0,r.kt)("p",null,"The message broker is the heart of a Spectacles application. To launch Redis as a message broker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n    --rm -it \\\n    -p 6379:6379 \\\n    redis\n")),(0,r.kt)("h2",{id:"command-handler"},"Command Handler"),(0,r.kt)("p",null,"To launch a basic command handler:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a new project"),(0,r.kt)("li",{parentName:"ol"},"Install dependencies")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i ioredis @spectacles/brokers\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Create a command handler")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Redis } from '@spectacles/brokers';\nimport * as RedisClient from 'ioredis';\n\nconst client = new RedisClient();\nconst broker = new Redis('gateway', client);\n\nbroker.on('MESSAGE_CREATE', async (msg, { ack }) => {\n    await ack();\n    console.log(msg);\n});\n\nbroker.subscribe('MESSAGE_CREATE');\n")),(0,r.kt)("h2",{id:"proxy"},"Proxy"),(0,r.kt)("p",null,"The proxy will handle all of your outgoing HTTP requests to Discord. To launch the Spectacles\nproxy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n    --rm -it \\\n    spectacles/proxy:latest\n")),(0,r.kt)("h2",{id:"gateway"},"Gateway"),(0,r.kt)("p",null,"The gateway manages your bot's connection to the Discord gateway. To launch the Spectacles gateway:"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"DISCORD_TOKEN")," environment variable with your bot's token."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'docker run \\\n    --rm -it \\\n    -e DISCORD_TOKEN="your token" \\\n    -e DISCORD_EVENTS=MESSAGE_CREATE \\\n    -e DISCORD_INTENTS=GUILD,GUILD_MESSAGES \\\n    -e BROKER_TYPE=redis \\\n    -e REDIS_URL=localhost:6379 \\\n    spectacles/gateway\n')),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Send a message in a guild that your bot is in, and you will see it in the console output of your\ncommand handler."))}p.isMDXComponent=!0},654:function(e,t,n){t.Z=n.p+"assets/images/architecture-a4d8d9c8f5d9db4e57c59170966c69a2.svg"}}]);