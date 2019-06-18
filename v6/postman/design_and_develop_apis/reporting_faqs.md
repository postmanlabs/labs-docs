---
title: "Reporting FAQs"
page_id: "Reporting FAQs"
warning: false
---

1.	Are these reports generated real-time?

    The reports are not generated real-time. They may show you a lag of few minutes to 24 hours. You can view the last updated time to know the exact time the reports were last refreshed. 

2.	What kind of reports can I see now?

    You can see both team and API-level reports. You will be able to view all the shared APIs as well as the APIs that you have access for in the team workspace. 

3.	Can I view reports for individual collections?

    Yes, you can view reports for the individual collections if your collection is linked to an API. 

4.	How do I download/export reports?

    At the moment, Postman does not allow you to download or export your reports. However, Postman will soon enable you to do this. 

5.	I don’t see any data in reports, why?

    There could be multiple reasons for not seeing data in your reports: 

    1. It is too early to check. The data refresh happens every 24 hours and it may be possible that the data may not have refreshed yet. 
    
    2. You might have linked a wrong collection to your API.

    3. You might have forgotten to link a collection to your API.

    4. You may be viewing data for an API which is in your personal workspace. 

    **Note:** If you think none of the above reasons are accurate for your use case, please file a github issue so Postman team can look into and address it. 

6.	Why an API is not listed here?

    Your API may have been created in your personal workspace and not shared. You must share your API in a team workspace in order for your API to be listed. 

7.	How much recent is the data shown in graph?

    At any given point of time, Postman's Reporting Dashboard displays last 30 days (rolling) of history that you can use to view your reports. You can view your reports for the last 7 or 30 days. 

8.	How are metrics calculated in Postman?

    1.	Average response size
 
        The average response size is calculated based on the size of the response received on a particular day. The day when no requests are sent are not accounted for when calculating this metric. The following screen illustrates this:

        [![team api req](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Reports-AvgResp.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Reports-AvgResp.png) 

        In the above screen, the response size is shown for Jun 12. No request is sent on other dates in the graph. The average is calculated without accounting for the dates that have zero requests sent.

    2.	Average response time

        The average response time is calculated based on the time taken to return the response of the request. The day when no requests are sent are not accounted for when calculating this metric. The following screen illustrates this:

        [![team api req](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Reports-AvgRespTime.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Reports-AvgRespTime.png) 

        In the above screen, the response time is shown for Jun 12. No response is received on other dates because no request is sent. The average is calculated without accounting for the dates that have zero responses received. 

    3.	Failed test runs

        Gives you the number of failed test runs during a period of time. The average is calculated by taking into account all the days (even if no request is sent during a day). 

    4.	Team API requests

        Team API requests are calculated based on the number of requests you send over a period of time divided by the number of requests. Let's consider the following example:

        [![team api req](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Reports-TeamAPI.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Reports-TeamAPI.png) 

        In the example above, 15 requests were sent on Jun 12. Over the next six days no requests were sent. The 7-day average is 2.14 (15/7).

9.	What are the data sources Postman uses to calculate metrics?

    Postman uses the data in its **History** tab to calculate the metrics. 

10.	How do I view per-day metrics?

    To view per-day metrics, point your cursor on a particular date on the graph and click to view per-day metrics. The following screen illustrates viewing per-day metrics:

    [![reports per day](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Reports-PerDay1.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Reports-PerDay1.gif) 
    

11.	Why summary average response size does not match with the average of the graph?

    Typically, raw data is accounted for when calculating averages. In order to determine an accurate average, you must not calculate an average using data from already derived averages.   

12.	What does color coding in the graph for *Change over time* denote?

    The *Change over time* color coding is denoted in Red and Green colors to indicate an average decrease or increase over a period of time. Red color denotes decline in performance or activity and green denotes vice versa. Let's consider the following two examples:

    **Example 1**
 
    [![color code 1](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Reports-ColorCode1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Reports-ColorCode1.png) 

    The above example illustrates an 86.38 per cent decrease in the team API requests over a period of last seven days - so it is denoted in red. 


    **Example 2:** 

     [![color code 2](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Reports-ColorCode2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Reports-ColorCode2.png) 

     The above example illustrates a decrease in the average response size over a period of last seven days. Since there is a decrease in response, it is denoted in green.

13.	Can someone view details of entities for which they don’t have access to?

    No, you cannot view the details of entities for which you don't have access for.

14.	Why Response size/time and response codes are empty when requests are sent?

    You must enable the setting **Save Reponses** in the **History** tab. By default it’s not enabled.

    [![save response](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/History_Response_Jun18.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/History_Response_Jun18.png) 