var turn=false;
var squares = document.querySelectorAll(".squares");
$("#again").on("click", function(){
	for(var i=0;i<64;i++)
	{
		squares[i].classList.remove("g1");
		squares[i].classList.remove("g2");
		squares[i].classList.remove("g3");
		squares[i].classList.remove("r1");
		squares[i].classList.remove("r2");
		squares[i].classList.remove("r3");
		squares[i].classList.add("black");
	}
	turn = false;
	change();
});
change();
$(".squares").on("click", function(){
	if(turn==false)
	{
		var x=$(".squares").index($(this));
		if($(this).hasClass("black"))
		{
			this.classList.remove("black");
			this.classList.add("g1");
			turn=!turn;
		}
		else if($(this).hasClass("g1"))
		{
			this.classList.remove("g1");
			this.classList.add("g2");
			turn=!turn;
		}
		else if($(this).hasClass("g2"))
		{
			this.classList.remove("g2");
			this.classList.add("g3");
			turn=!turn;
		}
		else if($(this).hasClass("g3"))
		{
			this.classList.remove("g3");
			this.classList.add("black");
			threeg(x);
			turn=!turn;
		}
		change();
	}
	else
	{
		if($(this).hasClass("black"))
		{
			this.classList.remove("black");
			this.classList.add("r1");
			turn=!turn;
		}
		else if($(this).hasClass("r1"))
		{
			this.classList.remove("r1");
			this.classList.add("r2");
			turn=!turn;
		}
		else if($(this).hasClass("r2"))
		{
			this.classList.remove("r2");
			this.classList.add("r3");
			turn=!turn;
		}
		else if($(this).hasClass("r3"))
		{
			this.classList.remove("r3");
			this.classList.add("black");
			var x=$(".squares").index($(this));
			threer(x);
			turn=!turn;
		}
		else if($(this).hasClass("r1"))
		{
			this.classList.remove("r1");
			this.classList.add("black");
			var x=$(".squares").index($(this));
			threer(x);
			turn=!turn;
		}
		change();
	}

});
function change(){
	for(var i=0;i<64;i++)
	{
		if(turn)
		{
			squares[i].classList.remove("g");
			squares[i].classList.add("r");
		}
		else
		{
			squares[i].classList.remove("r");
			squares[i].classList.add("g");
		}
	}
}
function threeg(i)
{
	win();
	if(i%8!==7)
	{
		var x=Number(i+1);
		if($(".squares:eq("+x+")").hasClass("black"))
		{
			$(".squares:eq("+x+")").removeClass("black");
			$(".squares:eq("+x+")").addClass("g1");
		}
		else if($(".squares:eq("+x+")").hasClass("g1"))
		{
			$(".squares:eq("+x+")").removeClass("g1");
			$(".squares:eq("+x+")").addClass("g2");
		}	
		else if($(".squares:eq("+x+")").hasClass("g2"))
		{
			$(".squares:eq("+x+")").removeClass("g2");
			$(".squares:eq("+x+")").addClass("g3");
		}
		else if($(".squares:eq("+x+")").hasClass("g3"))
		{
			$(".squares:eq("+x+")").removeClass("g3");
			$(".squares:eq("+x+")").addClass("black");
			win();
			threeg(i+1);
		}
		else if($(".squares:eq("+x+")").hasClass("r1"))
		{
			$(".squares:eq("+x+")").removeClass("r1");
			$(".squares:eq("+x+")").addClass("g2");
			win();
		}
		else if($(".squares:eq("+x+")").hasClass("r2"))
		{
			$(".squares:eq("+x+")").removeClass("r2");
			$(".squares:eq("+x+")").addClass("g3");
			win();
		}
		else if($(".squares:eq("+x+")").hasClass("r3"))
		{
			$(".squares:eq("+x+")").removeClass("r3");
			$(".squares:eq("+x+")").addClass("black");
			win();
			threeg(i+1);
		}

	}
	if(i%8!==0)
	{
		var x=Number(i-1);
		if($(".squares:eq("+x+")").hasClass("black"))
		{
			$(".squares:eq("+x+")").removeClass("black");
			$(".squares:eq("+x+")").addClass("g1");
		}
		else if($(".squares:eq("+x+")").hasClass("g1"))
		{
			$(".squares:eq("+x+")").removeClass("g1");
			$(".squares:eq("+x+")").addClass("g2");
		}
		else if($(".squares:eq("+x+")").hasClass("g2"))
		{
			$(".squares:eq("+x+")").removeClass("g2");
			$(".squares:eq("+x+")").addClass("g3");
		}
		else if($(".squares:eq("+x+")").hasClass("g3"))
		{
			$(".squares:eq("+x+")").removeClass("g3");
			$(".squares:eq("+x+")").addClass("black");
			win();
			threeg(i-1);
		}
		else if($(".squares:eq("+x+")").hasClass("r1"))
		{
			$(".squares:eq("+x+")").removeClass("r1");
			$(".squares:eq("+x+")").addClass("g2");
			win();
		}
		else if($(".squares:eq("+x+")").hasClass("r2"))
		{
			$(".squares:eq("+x+")").removeClass("r2");
			$(".squares:eq("+x+")").addClass("g3");
			win();
		}
		else if($(".squares:eq("+x+")").hasClass("r3"))
		{
			$(".squares:eq("+x+")").removeClass("r3");
			$(".squares:eq("+x+")").addClass("black");
			win();
			threeg(i-1);
		}
	}
	if(i>7)
	{
		var x=Number(i-8);
		if($(".squares:eq("+x+")").hasClass("black"))
		{
			$(".squares:eq("+x+")").removeClass("black");
			$(".squares:eq("+x+")").addClass("g1");
		}
		else if($(".squares:eq("+x+")").hasClass("g1"))
		{
			$(".squares:eq("+x+")").removeClass("g1");
			$(".squares:eq("+x+")").addClass("g2");
		}
		else if($(".squares:eq("+x+")").hasClass("g2"))
		{
			$(".squares:eq("+x+")").removeClass("g2");
			$(".squares:eq("+x+")").addClass("g3");
		}
		else if($(".squares:eq("+x+")").hasClass("g3"))
		{
			$(".squares:eq("+x+")").removeClass("g3");
			$(".squares:eq("+x+")").addClass("black");
			win();
			threeg(i-8);
		}
		else if($(".squares:eq("+x+")").hasClass("r1"))
		{
			$(".squares:eq("+x+")").removeClass("r1");
			$(".squares:eq("+x+")").addClass("g2");
			win();
		}
		else if($(".squares:eq("+x+")").hasClass("r2"))
		{
			$(".squares:eq("+x+")").removeClass("r2");
			$(".squares:eq("+x+")").addClass("g3");
			win();
		}
		else if($(".squares:eq("+x+")").hasClass("r3"))
		{
			$(".squares:eq("+x+")").removeClass("r3");
			$(".squares:eq("+x+")").addClass("black");
			win();
			threeg(i-8);
		}
	}
	if(i<56)
	{
		var x=Number(i+8);
		if($(".squares:eq("+x+")").hasClass("black"))
		{
			$(".squares:eq("+x+")").removeClass("black");
			$(".squares:eq("+x+")").addClass("g1");
		}
		else if($(".squares:eq("+x+")").hasClass("g1"))
		{
			$(".squares:eq("+x+")").removeClass("g1");
			$(".squares:eq("+x+")").addClass("g2");
		}
		else if($(".squares:eq("+x+")").hasClass("g2"))
		{
			$(".squares:eq("+x+")").removeClass("g2");
			$(".squares:eq("+x+")").addClass("g3");
		}
		else if($(".squares:eq("+x+")").hasClass("g3"))
		{
			$(".squares:eq("+x+")").removeClass("g3");
			$(".squares:eq("+x+")").addClass("black");
			win();
			threeg(i+8);
		}
		else if($(".squares:eq("+x+")").hasClass("r1"))
		{
			$(".squares:eq("+x+")").removeClass("r1");
			$(".squares:eq("+x+")").addClass("g2");
			win();
		}
		else if($(".squares:eq("+x+")").hasClass("r2"))
		{
			$(".squares:eq("+x+")").removeClass("r2");
			$(".squares:eq("+x+")").addClass("g3");
			win();
		}
		else if($(".squares:eq("+x+")").hasClass("r3"))
		{
			$(".squares:eq("+x+")").removeClass("r3");
			$(".squares:eq("+x+")").addClass("black");
			win();
			threeg(i+8);
		}
	}
}
function threer(i)
{
	win();
	if(i%8!==7)
	{
		var x=Number(i+1);
		if($(".squares:eq("+x+")").hasClass("black"))
		{
			$(".squares:eq("+x+")").removeClass("black");
			$(".squares:eq("+x+")").addClass("r1");
		}
		else if($(".squares:eq("+x+")").hasClass("r1"))
		{
			$(".squares:eq("+x+")").removeClass("r1");
			$(".squares:eq("+x+")").addClass("r2");
		}
		else if($(".squares:eq("+x+")").hasClass("r2"))
		{
			$(".squares:eq("+x+")").removeClass("r2");
			$(".squares:eq("+x+")").addClass("r3");
		}
		else if($(".squares:eq("+x+")").hasClass("r3"))
		{
			$(".squares:eq("+x+")").removeClass("r3");
			$(".squares:eq("+x+")").addClass("black");
			win();
			threer(i+1);
		}
		else if($(".squares:eq("+x+")").hasClass("g1"))
		{
			$(".squares:eq("+x+")").removeClass("g1");
			$(".squares:eq("+x+")").addClass("r2");
			win();
		}
		else if($(".squares:eq("+x+")").hasClass("g2"))
		{
			$(".squares:eq("+x+")").removeClass("g2");
			$(".squares:eq("+x+")").addClass("r3");
			win();
		}
		else if($(".squares:eq("+x+")").hasClass("g3"))
		{
			$(".squares:eq("+x+")").removeClass("g3");
			$(".squares:eq("+x+")").addClass("black");
			win();
			threer(x);
		}
	}
	if(i%8!==0)
	{
		var x=Number(i-1);
		if($(".squares:eq("+x+")").hasClass("black"))
		{
			$(".squares:eq("+x+")").removeClass("black");
			$(".squares:eq("+x+")").addClass("r1");
		}
		else if($(".squares:eq("+x+")").hasClass("r1"))
		{
			$(".squares:eq("+x+")").removeClass("r1");
			$(".squares:eq("+x+")").addClass("r2");
		}
		else if($(".squares:eq("+x+")").hasClass("r2"))
		{
			$(".squares:eq("+x+")").removeClass("r2");
			$(".squares:eq("+x+")").addClass("r3");
		}
		else if($(".squares:eq("+x+")").hasClass("r3"))
		{
			$(".squares:eq("+x+")").removeClass("r3");
			$(".squares:eq("+x+")").addClass("black");
			win();
			threer(i-1);
		}
		else if($(".squares:eq("+x+")").hasClass("g1"))
		{
			$(".squares:eq("+x+")").removeClass("g1");
			$(".squares:eq("+x+")").addClass("r2");
			win();
		}
		else if($(".squares:eq("+x+")").hasClass("g2"))
		{
			$(".squares:eq("+x+")").removeClass("g2");
			$(".squares:eq("+x+")").addClass("r3");
			win();
		}
		else if($(".squares:eq("+x+")").hasClass("g3"))
		{
			$(".squares:eq("+x+")").removeClass("g3");
			$(".squares:eq("+x+")").addClass("black");
			win();
			threer(x);
		}
	}
	if(i>7)
	{
		var x=Number(i-8);
		if($(".squares:eq("+x+")").hasClass("black"))
		{
			$(".squares:eq("+x+")").removeClass("black");
			$(".squares:eq("+x+")").addClass("r1");
		}
		else if($(".squares:eq("+x+")").hasClass("r1"))
		{
			$(".squares:eq("+x+")").removeClass("r1");
			$(".squares:eq("+x+")").addClass("r2");
		}
		else if($(".squares:eq("+x+")").hasClass("r2"))
		{
			$(".squares:eq("+x+")").removeClass("r2");
			$(".squares:eq("+x+")").addClass("r3");
		}
		else if($(".squares:eq("+x+")").hasClass("r3"))
		{
			$(".squares:eq("+x+")").removeClass("r3");
			$(".squares:eq("+x+")").addClass("black");
			threer(i-8);
			win();
		}
		else if($(".squares:eq("+x+")").hasClass("g1"))
		{
			$(".squares:eq("+x+")").removeClass("g1");
			$(".squares:eq("+x+")").addClass("r2");
			win();
		}
		else if($(".squares:eq("+x+")").hasClass("g2"))
		{
			$(".squares:eq("+x+")").removeClass("g2");
			$(".squares:eq("+x+")").addClass("r3");
			win();
		}
		else if($(".squares:eq("+x+")").hasClass("g3"))
		{
			$(".squares:eq("+x+")").removeClass("g3");
			$(".squares:eq("+x+")").addClass("black");
			win();
			threer(x);
		}
	}
	if(i<56)
	{
		var x=Number(i+8);
		if($(".squares:eq("+x+")").hasClass("black"))
		{
			$(".squares:eq("+x+")").removeClass("black");
			$(".squares:eq("+x+")").addClass("r1");
		}
		else if($(".squares:eq("+x+")").hasClass("r1"))
		{
			$(".squares:eq("+x+")").removeClass("r1");
			$(".squares:eq("+x+")").addClass("r2");
		}
		else if($(".squares:eq("+x+")").hasClass("r2"))
		{
			$(".squares:eq("+x+")").removeClass("r2");
			$(".squares:eq("+x+")").addClass("r3");
		}
		else if($(".squares:eq("+x+")").hasClass("r3"))
		{
			$(".squares:eq("+x+")").removeClass("r3");
			$(".squares:eq("+x+")").addClass("black");
			threer(i+8);
			win();
		}
		else if($(".squares:eq("+x+")").hasClass("g1"))
		{
			$(".squares:eq("+x+")").removeClass("g1");
			$(".squares:eq("+x+")").addClass("r2");
			win();
		}
		else if($(".squares:eq("+x+")").hasClass("g2"))
		{
			$(".squares:eq("+x+")").removeClass("g2");
			$(".squares:eq("+x+")").addClass("r3");
			win();
		}
		else if($(".squares:eq("+x+")").hasClass("g3"))
		{
			$(".squares:eq("+x+")").removeClass("g3");
			$(".squares:eq("+x+")").addClass("black");
			win();
			threer(x);
		}
	}
}
function win()
{
	var g=0;
	var r=0;
	for(var i=0;i<64;i++)
	{
		if(squares[i].classList.contains("g1") || squares[i].classList.contains("g2") || squares[i].classList.contains("g3"))
		{
			g++;
		}
		else if(squares[i].classList.contains("r1") || squares[i].classList.contains("r2") || squares[i].classList.contains("r3"))
		{
			r++;
		}
	}
	if(g===0)
	{
		alert("Red Wins!!!");
	}
	else if(r===0)
	{
		alert("Green Wins!!!");
	}
}
