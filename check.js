function saiten2(){
	var n=7;//もと5
	var score;
	score=0;
	var kojin= new Array(n);
	
    var complete =true;
    
	var riaave = [3.0909,4.4545,3.6363,2.2727,1.7273,3.0,2.6364];
	var riadiv = [0.8999,1.3727,1.5239,1.8031,1.5428,0.9045,0.9315];
	
    var hiriaave = [3.27027,3.378378,3.756756,2.081081,2.513513,3.054054,2.540541];
	var hiriadiv = [0.91971,1.963881,1.496038,1.776397,1.93993,0.928409,1.002553];
    
        
	var and1 = new Array(n);
            for (var i=0; i<n; i++){and1[i]=5*i;}
	var and2 = new Array(n);
            for (var i=0; i<n; i++){and2[i]=1+5*i;}
	var and3 = new Array(n);
            for (var i=0; i<n; i++){and3[i]=2+5*i;}
	var and4 = new Array(n);
            for (var i=0; i<n; i++){and4[i]=3+5*i;}
	var and5 = new Array(n);
            for (var i=0; i<n; i++){and5[i]=4+5*i;}
	
	for (var i=0; i<n; i++)
	{
		if( document.radioB.elements[and1[i]].checked ) kojin[i]=document.radioB.elements[and1[i]].value;
		else if( document.radioB.elements[and2[i]].checked ) kojin[i]=document.radioB.elements[and2[i]].value;
		else if( document.radioB.elements[and3[i]].checked ) kojin[i]=document.radioB.elements[and3[i]].value;
		else if( document.radioB.elements[and4[i]].checked ) kojin[i]=document.radioB.elements[and4[i]].value;
		else if( document.radioB.elements[and5[i]].checked ) kojin[i]=document.radioB.elements[and5[i]].value;
        else{complete=false;break;}
	}
	
  
	

            var ria=0;
            var hiria=0;
		for(var i=0;i<n;i++){
                    ria+=(kojin[i]-riaave[i])*(kojin[i]-riaave[i])/(riadiv[i]*riadiv[i]);
                }
                
        for(var i=0;i<n;i++){
                   hiria+=(kojin[i]-hiriaave[i])*(kojin[i]-hiriaave[i])/(hiriadiv[i]*hiriadiv[i]);
                }
    
        score=Math.round(100*hiria/(hiria+ria));
    
        if(complete==true){
            location.href="result.html?"+escape(score);
        }
        else{
            alert("未回答項目があります");
        }

}