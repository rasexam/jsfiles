
   /* No = 9 */
       var timestamp = &quot;<data:post.timestamp/>&quot;;
       if (timestamp != &#39;&#39;) {
               var timesplit = timestamp.split(&quot;,&quot;);
               var date_yyyy = timesplit[2];
               var timesplit = timesplit[1].split(&quot; &quot;);
               var date_dd = timesplit[2];
               var date_mmm = timesplit[1].substring(0, 3);
       }
