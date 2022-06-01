import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
    return `
    .eec.              .e$$$c                                
    z$*"*$$eec..       zP  .3$c                  
   .$"  d$"  """****bee*=*"" *$                               
   $%  d$$                   ^$%                              
  .$  z$%$bc.                 $%             sumfetch: summary display                  
  4F 4$" $"^$*ec..  .ee.    ./" b                             
  dF $P  P  F   """""3F""""""   4           -----------                  
  3b4$   "           $F         4            ABOUT                  
  4$$$  -            $F         4            ${config.title}                  
   $$$               $F         4           爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u> 
   *$$               $F         @                             
   4$$               $F         F           -----------                  
   ^$F   .......     $F        .F            CONTACT                   
    $"  z"     ^"""""$F"""""""""%.           <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>                  
   4$  4F     e      $L          ".          <u><a href="https://wwww.twitch.tv//${config.social.twitch}" target="_blank">twitch.tv/${config.social.twitch}</a></u>                  
   4F  ^L    4$     z%"c    *.    b          <u><a href="https://www.youtube.com/channel/${config.social.youtube}" target="_blank">youtube.com/${config.social.youtube}</a></u>                  
   d    ^$*=e$$eer=$"  "be..JL..ee*          <u><a href="https://wwww.twitter.com/${config.social.twitter}" target="_blank">${config.social.twitter}</a></u>                  
   $     $   $F    $   zP   4P   F                            
   F     F   $F    4. .P    d%  J                             
  4%     F   $F     F $"   zP   P                             
  J      F   '%     Fd"   4P   4"                             
  $      F          $F         P                              
  $      L         .$         4%                              
  *      '.       .$$.       .$                               
  '       ^"****"""  "*******$"                               
   %                        .P                                
    *c                     .@                                 
     ^"%4c...        ...zed*                          
           ^""""""""
    `
};

export default sumfetch;
