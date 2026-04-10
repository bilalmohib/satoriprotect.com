Hi @diaz_li_00678 and @philliplew,

I have completed both tasks:

- **BEYON-16:** Configure root domain redirect from [`satoriprotect.com`](https://satoriprotect.com/) to [`beyondintelligence.ai`](https://www.beyondintelligence.ai/)  
  [Jira Ticket](https://beyondintelligence2.atlassian.net/jira/core/projects/BEYON/board?filter=&groupBy=status&selectedIssue=BEYON-16)

- **BEYON-15:** Configure `/help` redirect from [`satoriprotect.com/help`](https://satoriprotect.com/help) to [`support.beyondintelligence.ai`](https://support.beyondintelligence.ai)  
  [Jira Ticket](https://beyondintelligence2.atlassian.net/jira/core/projects/BEYON/board?filter=&groupBy=status&selectedIssue=BEYON-15)

## What is now working

- Visiting [`satoriprotect.com`](https://satoriprotect.com/) redirects to [`beyondintelligence.ai`](https://www.beyondintelligence.ai/).
- Visiting [`satoriprotect.com/help`](https://satoriprotect.com/help) redirects to [`support.beyondintelligence.ai`](https://support.beyondintelligence.ai).

## How it is implemented (easy wording)

We are using **Next.js redirects**.

In simple words, the website checks the path and then sends users to the right place:

- `/help` goes to the support website
- all other paths go to the main Beyond Intelligence website

The redirects are permanent (**301/308**), which is good for SEO and long-term routing.

@philliplew both redirect tasks are complete and working.

Thanks,  
Regards,  
Muhammad Bilal
