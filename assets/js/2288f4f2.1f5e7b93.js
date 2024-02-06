"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[293],{7165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(5893),i=n(1151);const s={title:"All About Agent Descriptions",authors:["afourney"],tags:["AutoGen"]},r=void 0,a={permalink:"/autogen/blog/2023/12/29/AgentDescriptions",source:"@site/blog/2023-12-29-AgentDescriptions/index.mdx",title:"All About Agent Descriptions",description:"TLDR",date:"2023-12-29T00:00:00.000Z",formattedDate:"December 29, 2023",tags:[{label:"AutoGen",permalink:"/autogen/blog/tags/auto-gen"}],readingTime:8.555,hasTruncateMarker:!1,authors:[{name:"Adam Fourney",title:"Principal Researcher Microsoft Research",url:"https://www.adamfourney.com",imageURL:"https://github.com/afourney.png",key:"afourney"}],frontMatter:{title:"All About Agent Descriptions",authors:["afourney"],tags:["AutoGen"]},unlisted:!1,prevItem:{title:"Code execution is now by default inside docker container",permalink:"/autogen/blog/2024/01/23/Code-execution-in-docker"},nextItem:{title:"AgentOptimizer - An Agentic Way to Train Your LLM Agent",permalink:"/autogen/blog/2023/12/23/AgentOptimizer"}},l={authorsImageUrls:[void 0]},c=[{value:"TLDR",id:"tldr",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Example",id:"example",level:2},{value:"An Experiment with Distraction",id:"an-experiment-with-distraction",level:2},{value:"With versions prior to 0.2.2, using <code>system_message</code>:",id:"with-versions-prior-to-022-using-system_message",level:4},{value:"With version 0.2.2, using <code>description</code>:",id:"with-version-022-using-description",level:4},{value:"Tips for Writing Good Descriptions",id:"tips-for-writing-good-descriptions",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"tldr",children:"TLDR"}),"\n",(0,o.jsxs)(t.p,{children:["AutoGen 0.2.2 introduces a ",(0,o.jsx)(t.a,{href:"https://microsoft.github.io/autogen/docs/reference/agentchat/conversable_agent#__init__",children:"description"})," field to ConversableAgent (and all subclasses), and changes GroupChat so that it uses agent ",(0,o.jsx)(t.code,{children:"description"}),"s rather than ",(0,o.jsx)(t.code,{children:"system_message"}),"s when choosing which agents should speak next."]}),"\n",(0,o.jsx)(t.p,{children:"This is expected to simplify GroupChat\u2019s job, improve orchestration, and make it easier to implement new GroupChat or GroupChat-like alternatives."}),"\n",(0,o.jsxs)(t.p,{children:["If you are a developer, and things were already working well for you, no action is needed -- backward compatibility is ensured because the ",(0,o.jsx)(t.code,{children:"description"})," field defaults to the ",(0,o.jsx)(t.code,{children:"system_message"})," when no description is provided."]}),"\n",(0,o.jsxs)(t.p,{children:["However, if you were struggling with getting GroupChat to work, you can now try updating the ",(0,o.jsx)(t.code,{children:"description"})," field."]}),"\n",(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(t.p,{children:["As AutoGen matures and developers build increasingly complex combinations of agents, orchestration is becoming an important capability. At present, ",(0,o.jsx)(t.a,{href:"https://microsoft.github.io/autogen/docs/reference/agentchat/groupchat#groupchat-objects",children:"GroupChat"})," and the ",(0,o.jsx)(t.a,{href:"https://microsoft.github.io/autogen/docs/reference/agentchat/groupchat#groupchatmanager-objects",children:"GroupChatManager"})," are the main built-in tools for orchestrating conversations between 3 or more agents. For orchestrators like GroupChat to work well, they need to know something about each agent so that they can decide who should speak and when. Prior to AutoGen 0.2.2, GroupChat relied on each agent's ",(0,o.jsx)(t.code,{children:"system_message"})," and ",(0,o.jsx)(t.code,{children:"name"})," to learn about each participating agent. This is likely fine when the system prompt is short and sweet, but can lead to problems when the instructions are very long (e.g., with the ",(0,o.jsx)(t.a,{href:"https://microsoft.github.io/autogen/docs/reference/agentchat/assistant_agent",children:"AssistantAgent"}),"), or non-existent (e.g., with the ",(0,o.jsx)(t.a,{href:"https://microsoft.github.io/autogen/docs/reference/agentchat/user_proxy_agent",children:"UserProxyAgent"}),")."]}),"\n",(0,o.jsxs)(t.p,{children:["AutoGen 0.2.2 introduces a ",(0,o.jsx)(t.a,{href:"https://microsoft.github.io/autogen/docs/reference/agentchat/conversable_agent#__init__",children:"description"})," field to all agents, and replaces the use of the ",(0,o.jsx)(t.code,{children:"system_message"})," for orchestration in GroupChat and all future orchestrators. The ",(0,o.jsx)(t.code,{children:"description"})," field defaults to the ",(0,o.jsx)(t.code,{children:"system_message"})," to ensure backwards compatibility, so you may not need to change anything with your code if things are working well for you. However, if you were struggling with GroupChat, give setting the ",(0,o.jsx)(t.code,{children:"description"})," field a try."]}),"\n",(0,o.jsxs)(t.p,{children:["The remainder of this post provides an example of how using the ",(0,o.jsx)(t.code,{children:"description"})," field simplifies GroupChat's job,  provides some evidence of its effectiveness, and provides tips for writing good descriptions."]}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.p,{children:"The current GroupChat orchestration system prompt has the following template:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"You are in a role play game. The following roles are available:\r\n\r\n{self._participant_roles(agents)}.\r\n\r\nRead the following conversation.\r\nThen select the next role from {[agent.name for agent in agents]} to play. Only return the role.\n"})}),"\n",(0,o.jsx)(t.p,{children:"Suppose that you wanted to include 3 agents: A UserProxyAgent, an AssistantAgent, and perhaps a GuardrailsAgent."}),"\n",(0,o.jsx)(t.p,{children:"Prior to 0.2.2, this template would expand to:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"You are in a role play game. The following roles are available:\r\n\r\nassistant: You are a helpful AI assistant.\r\nSolve tasks using your coding and language skills.\r\nIn the following cases, suggest python code (in a python coding block) or shell script (in a sh coding block) for the user to execute.\r\n1. When you need to collect info, use the code to output the info you need, for example, browse or search the web, download/read a file, print the content of a webpage or a file, get the current date/time, check the operating system. After sufficient info is printed and the task is ready to be solved based on your language skill, you can solve the task by yourself.\r\n2. When you need to perform some task with code, use the code to perform the task and output the result. Finish the task smartly.\r\nSolve the task step by step if you need to. If a plan is not provided, explain your plan first. Be clear which step uses code, and which step uses your language skill.\r\nWhen using code, you must indicate the script type in the code block. The user cannot provide any other feedback or perform any other action beyond executing the code you suggest. The user can't modify your code. So do not suggest incomplete code which requires users to modify. Don't use a code block if it's not intended to be executed by the user.\r\nIf you want the user to save the code in a file before executing it, put # filename: <filename> inside the code block as the first line. Don't include multiple code blocks in one response. Do not ask users to copy and paste the result. Instead, use 'print' function for the output when relevant. Check the execution result returned by the user.\r\nIf the result indicates there is an error, fix the error and output the code again. Suggest the full code instead of partial code or code changes. If the error can't be fixed or if the task is not solved even after the code is executed successfully, analyze the problem, revisit your assumption, collect additional info you need, and think of a different approach to try.\r\nWhen you find an answer, verify the answer carefully. Include verifiable evidence in your response if possible.\r\nReply \"TERMINATE\" in the end when everything is done.\r\nuser_proxy:\r\nguardrails_agent: You are a guardrails agent and are tasked with ensuring that all parties adhere to the following responsible AI policies:\r\n- You MUST TERMINATE the conversation if it involves writing or running HARMFUL or DESTRUCTIVE code.\r\n- You MUST TERMINATE the conversation if it involves discussions of anything relating to hacking, computer exploits, or computer security.\r\n- You MUST TERMINATE the conversation if it involves violent or graphic content such as Harm to Others, Self-Harm, Suicide.\r\n- You MUST TERMINATE the conversation if it involves demeaning speech, hate speech, discriminatory remarks, or any form of harassment based on race, gender, sexuality, religion, nationality, disability, or any other protected characteristic.\r\n- You MUST TERMINATE the conversation if it involves seeking or giving  advice in highly regulated domains such as medical advice, mental health, legal advice or financial advice\r\n- You MUST TERMINATE the conversation if it involves illegal activities including when encouraging or providing guidance on illegal activities.\r\n- You MUST TERMINATE the conversation if it involves manipulative or deceptive Content including scams, phishing and spread false information.\r\n- You MUST TERMINATE the conversation if it involves involve sexually explicit content or discussions.\r\n- You MUST TERMINATE the conversation if it involves sharing or soliciting personal, sensitive, or confidential information from users. This includes financial details, health records, and other private matters.\r\n- You MUST TERMINATE the conversation if it involves deep personal problems such as dealing with serious personal issues, mental health concerns, or crisis situations.\r\nIf you decide that the conversation must be terminated, explain your reasoning then output the uppercase word \"TERMINATE\". If, on the other hand, you decide the conversation is acceptable by the above standards, indicate as much, then ask the other parties to proceed.\r\n\r\nRead the following conversation.\r\nThen select the next role from [assistant, user_proxy, guardrails_agent] to play. Only return the role.\r\n\n"})}),"\n",(0,o.jsx)(t.p,{children:"As you can see, this description is super confusing:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"It is hard to make out where each agent's role-description ends"}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"You"})," appears numerous times, and refers to three separate agents (GroupChatManager, AssistantAgent, and GuardrailsAgent)"]}),"\n",(0,o.jsx)(t.li,{children:"It takes a lot of tokens!"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Consequently, it's not hard to see why the GroupChat manager sometimes struggles with this orchestration task."}),"\n",(0,o.jsx)(t.p,{children:"With AutoGen 0.2.2 onward, GroupChat instead relies on the description field. With a description field the orchestration prompt becomes:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"You are in a role play game. The following roles are available:\r\n\r\nassistant: A helpful and general-purpose AI assistant that has strong language skills, Python skills, and Linux command line skills.\r\nuser_proxy: A user that can run Python code or input command line commands at a Linux terminal and report back the execution results.\r\nguradrails_agent: An agent that ensures the conversation conforms to responsible AI guidelines.\r\n\r\nRead the following conversation.\r\nThen select the next role from [assistant, user_proxy, guardrails_agent] to play. Only return the role.\n"})}),"\n",(0,o.jsx)(t.p,{children:"This is much easier to parse and understand, and it doesn't use nearly as many tokens. Moreover, the following experiment provides early evidence that it works."}),"\n",(0,o.jsx)(t.h2,{id:"an-experiment-with-distraction",children:"An Experiment with Distraction"}),"\n",(0,o.jsxs)(t.p,{children:["To illustrate the impact of the ",(0,o.jsx)(t.code,{children:"description"})," field, we set up a three-agent experiment with a reduced 26-problem subset of the HumanEval benchmark. Here, three agents were added to a GroupChat to solve programming problems. The three agents were:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Coder (default Assistant prompt)"}),"\n",(0,o.jsx)(t.li,{children:"UserProxy (configured to execute code)"}),"\n",(0,o.jsx)(t.li,{children:"ExecutiveChef (added as a distraction)"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The Coder and UserProxy used the AssistantAgent and UserProxy defaults (provided above), while the ExecutiveChef was given the system prompt:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"You are an executive chef with 28 years of industry experience. You can answer questions about menu planning, meal preparation, and cooking techniques.\n"})}),"\n",(0,o.jsx)(t.p,{children:"The ExecutiveChef is clearly the distractor here -- given that no HumanEval problems are food-related, the GroupChat should rarely consult with the chef. However, when configured with GPT-3.5-turbo-16k, we can clearly see the GroupChat struggling with orchestration:"}),"\n",(0,o.jsxs)(t.h4,{id:"with-versions-prior-to-022-using-system_message",children:["With versions prior to 0.2.2, using ",(0,o.jsx)(t.code,{children:"system_message"}),":"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The Agents solve 3 out of 26 problems on their first turn"}),"\n",(0,o.jsx)(t.li,{children:"The ExecutiveChef is called upon 54 times! (almost as much as the Coder at 68 times)"}),"\n"]}),"\n",(0,o.jsxs)(t.h4,{id:"with-version-022-using-description",children:["With version 0.2.2, using ",(0,o.jsx)(t.code,{children:"description"}),":"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The Agents solve 7 out of 26 problems on the first turn"}),"\n",(0,o.jsx)(t.li,{children:"The ExecutiveChef is called upon 27 times! (versus 84 times for the Coder)"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Using the ",(0,o.jsx)(t.code,{children:"description"})," field doubles performance on this task and halves the incidence of calling upon the distractor agent."]}),"\n",(0,o.jsx)(t.h2,{id:"tips-for-writing-good-descriptions",children:"Tips for Writing Good Descriptions"}),"\n",(0,o.jsxs)(t.p,{children:["Since ",(0,o.jsx)(t.code,{children:"descriptions"})," serve a different purpose than ",(0,o.jsx)(t.code,{children:"system_message"}),"s, it is worth reviewing what makes a good agent description. While descriptions are new, the following tips appear to lead to good results:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:'Avoid using the 1st or 2nd person perspective. Descriptions should not contain "I" or "You", unless perhaps "You" is in reference to the GroupChat / orchestrator'}),"\n",(0,o.jsx)(t.li,{children:"Include any details that might help the orchestrator know when to call upon the agent"}),"\n",(0,o.jsx)(t.li,{children:'Keep descriptions short (e.g., "A helpful AI assistant with strong natural language and Python coding skills.").'}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The main thing to remember is that ",(0,o.jsx)(t.strong,{children:"the description is for the benefit of the GroupChatManager, not for the Agent's own use or instruction"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsxs)(t.p,{children:["AutoGen 0.2.2 introduces a ",(0,o.jsx)(t.code,{children:"description"}),", becoming the main way agents describe themselves to orchestrators like GroupChat. Since the ",(0,o.jsx)(t.code,{children:"description"})," defaults to the ",(0,o.jsx)(t.code,{children:"system_message"}),", there's nothing you need to change if you were already satisfied with how your group chats were working. However, we expect this feature to generally improve orchestration, so please consider experimenting with the ",(0,o.jsx)(t.code,{children:"description"})," field if you are struggling with GroupChat or want to boost performance."]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var o=n(7294);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);