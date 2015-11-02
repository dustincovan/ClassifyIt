$(document).ready(function() 
{
	function getRandomInt(min, max) 
	{
		return Math.floor(Math.random() * (max - min + 1)) + min;

	} // end getRandomInt function

	function shuffle(array) 
	{
	    var counter = array.length, temp, index;

	    // While there are elements in the array
	    while (counter > 0) 
	    {
	        // Pick a random index
	        index = Math.floor(Math.random() * counter);

	        // Decrease counter by 1
	        counter--;

	        // And swap the last element with it
	        temp = array[counter];
	        array[counter] = array[index];
	        array[index] = temp;
	    }

	    return array;

	} // end shuffle function

	var classificationImages = [];
	var shuffledImages = [];
	var imageShowing = "";
	var currentId = "";

	var investigateCounter = 0;

	function shuffleAndSetUpImages()
	{
		classificationImages = ['#mammalImg', '#amphibianImg', '#birdImg', '#fishImg', '#reptileImg', '#sandwichImg', '#jellyfishImg'];

		shuffledImages = shuffle(classificationImages);

		for(var x=0; x<shuffledImages.length; x++)
		{
			$(shuffledImages[x]).hide();
		}

		imageShowing = $(shuffledImages.shift()).show();
		currentId = $(imageShowing).attr('id');
	}

	function reset()
	{
		$('.question').hide();
		$('.btn').hide();
		$('.investigationImg').hide();
		$('#congratulationsHeading').hide();
	
		$('.yesButton').show();
		$('.noButton').show();
		$('#investigateButton').show();

		$('#isItAliveQuestion').show();

		$(".footerClassificationNames").css("text-decoration", "none");
	}

	shuffleAndSetUpImages();

	reset();

	var choiceCounter = 0;

	$(".yesButton").click(function(){

		if (choiceCounter == 0 && currentId != 'sandwichImg')
		{
			$('#' + currentId).show();
			$('#itsAliveImg').hide();

			$('.question').hide();
			$('#isItAVertebrateQuestion').show();

			$('#investigateButton').hide();
			$('#xRayButton').show();

			choiceCounter = 1;
		
		}
		else if (choiceCounter == 0 && currentId == 'sandwichImg')
		{
			$('.question').hide();
			$('#betterCheckAgainItsDeadQuestion').show();
		}	
		else if (choiceCounter == 1 && (currentId != 'jellyfishImg' && currentId != 'sandwichImg'))
		{
			$('#' + currentId).show();
			$('#xRayImg').hide();

			$('.question').hide();
			$('#bloodTempQuestion').show();


			$(".btn").hide();
			$('#warmBloodedButton').show();
			$('#coldBloodedButton').show();
			$('#investigateButton').show();
			
			choiceCounter = 2;

		}
		else if (choiceCounter == 1 && (currentId == 'jellyfishImg' && currentId != 'sandwichImg'))
		{
			$('.question').hide();
			$('#betterCheckAgainHasNoBackboneQuestion').show();		
		}
		
	}); // end yesButton click

	$(".noButton").click(function(){

		if (choiceCounter == 0 && currentId != 'sandwichImg')
		{
			$('.question').hide();
			$('#betterCheckAgainItsAliveQuestion').show();

		}
		else if (choiceCounter == 0 && currentId == 'sandwichImg')
		{
			$('#' + currentId).show();
			$('#tombstoneImg').hide();

			$('.question').hide();
			$('#itsDeadSoMoveOnQuestion').show();

			$('.footerClassificationNames').css('text-decoration', 'line-through');

			$('.btn').hide();
			$('#newThingButton').show();
		}
		else if (choiceCounter == 1 && (currentId != 'jellyfishImg' && currentId != 'sandwichImg'))
		{
			$('.question').hide();
			$('#betterCheckAgainHasABackboneQuestion').show();
		}
		else if (choiceCounter == 1 && (currentId == 'jellyfishImg' && currentId != 'sandwichImg'))
		{
			$('#' + currentId).show();
			$('#noBackboneImg').hide();

			$('.question').hide();
			$('#itsNotAVertebrateSoMoveOnQuestion').show();

			$('.footerClassificationNames').css('text-decoration', 'line-through');

			$('.btn').hide();
			$('#newThingButton').show();	
		}
	}); // end noButton click

	$('#newThingButton').click(function(){

		reset();

		$('#' + currentId).hide();

		if (shuffledImages.length > 0)
		{
			imageShowing = $(shuffledImages.shift()).show(); // show the new image 
			currentId = $(imageShowing).attr('id'); // get the id of the new image

			console.log(shuffledImages);
		}
		else if (shuffledImages.length == 0)
		{
			$('.question').hide();
			$('.btn').hide();

			$('#introHeading').hide();
			$('#congratulationsHeading').show();

			$('#greatJobImg').show();

			$('#congratulationsQuestion').show();
			$('#playAgainButton').show();
			$('#level2Button').show();
		}

		choiceCounter = 0;

		console.log('shuffledImages length = ' + shuffledImages.length);

		console.log('currentId =' + currentId);

	}); // end newThingButton click

	$('#xRayButton').click(function(){

		if (currentId != 'sandwichImg' && currentId != 'jellyfishImg')
		{
			$('#' + currentId).hide();
			$('#xRayImg').show();
		}
		else
		{
			$('#' + currentId).hide();
			$('#noBackboneImg').show();
		}
	});

	$('#warmBloodedButton').click(function(){

		if (currentId == 'mammalImg' || currentId == 'birdImg')
		{
			$('.question').hide();
			$('#furOrFeathersQuestion').show();

			$('.investigationImg').hide();
			$('#' + currentId).show();

			$('.btn').hide();
			$('#feathersButton').show();
			$('#furButton').show();
			$('#investigateButton').show();

			$('#reptileFooter').css('text-decoration', 'line-through');
			$('#fishFooter').css('text-decoration', 'line-through');
			$('#amphibianFooter').css('text-decoration', 'line-through');

			choiceCounter = 3;
		}
		else
		{
			$('.question').hide();
			$('#betterCheckAgainIsNotWarmBloodedQuestion').show();
		}
		
	}); // end warmBloodedButton click

	$('#coldBloodedButton').click(function(){

		if (currentId == 'reptileImg' || currentId == 'amphibianImg' || currentId == 'fishImg')
		{
			$('.question').hide();
			$('#landOrWaterEggsQuestion').show();

			$('.investigationImg').hide();
			$('#' + currentId).show();

			$('.btn').hide();
			$('#eggsOnLandButton').show();
			$('#eggsInWaterButton').show();
			$('#investigateButton').show();

			$('#mammalFooter').css('text-decoration', 'line-through');
			$('#birdFooter').css('text-decoration', 'line-through');

			choiceCounter = 3;
		}
		else
		{
			$('.question').hide();
			$('#betterCheckAgainIsNotColdBloodedQuestion').show();
		}

		
	}); // end coldBloodedButton click

	$('#feathersButton').click(function(){

		if (currentId == 'birdImg')
		{
			$('.question').hide();
			$('#itsABirdQuestion').show();

			$('.investigationImg').hide();
			$('#' + currentId).show();

			$('#mammalFooter').css('text-decoration', 'line-through');

			$('.btn').hide();
			$('#newThingButton').show();

			choiceCounter = 4;

		}
		else
		{
			$('.question').hide();
			$('#betterCheckAgainHasNoFeathersQuestion').show();
		}
		
	}); // end feathersButton click

	$('#furButton').click(function(){

		if (currentId == 'mammalImg')
		{
			$('.question').hide();
			$('#itsAMammalQuestion').show();

			$('.investigationImg').hide();
			$('#' + currentId).show();

			$('#birdFooter').css('text-decoration', 'line-through');

			$('.btn').hide();
			$('#newThingButton').show();

			choiceCounter = 4;	
		}
		else
		{
			$('.question').hide();
			$('#betterCheckAgainHasNoFurQuestion').show();
		}

	}); // end furButton click

	$('#eggsOnLandButton').click(function(){

		if (currentId == 'reptileImg')
		{
			$('.question').hide();
			$('#itsAReptileQuestion').show();

			$('.investigationImg').hide();
			$('#' + currentId).show();

			$('#fishFooter').css('text-decoration', 'line-through');
			$('#amphibianFooter').css('text-decoration', 'line-through');

			$('.btn').hide();
			$('#newThingButton').show();

			choiceCounter = 4;	
		}
		else
		{
			$('.question').hide();
			$('#betterCheckAgainLaysEggsInWaterQuestion').show();
		}

	}); // end eggsOnLandButton click

	$('#eggsInWaterButton').click(function(){

		if (currentId == 'fishImg' || currentId == 'amphibianImg')
		{
			$('.question').hide();
			$('#gillsOrSkinQuestion').show();

			$('.investigationImg').hide();
			$('#' + currentId).show();

			$('#reptileFooter').css('text-decoration', 'line-through');

			$('.btn').hide();
			$('#scalesAndGillsButton').show();
			$('#softSlimySkinButton').show();
			$('#investigateButton').show();	

			choiceCounter = 4;
		}
		else
		{
			$('.question').hide();
			$('#betterCheckAgainLaysEggsOnLandQuestion').show();
		}

	}); // end eggsInWaterButton click

	$('#scalesAndGillsButton').click(function(){

		if (currentId == 'fishImg')
		{
			$('.question').hide();
			$('#itsAFishQuestion').show();

			$('.investigationImg').hide();
			$('#' + currentId).show();

			$('#amphibianFooter').css('text-decoration', 'line-through');

			$('.btn').hide();
			$('#newThingButton').show();

			choiceCounter = 5;
			
		}
		else
		{
			$('.question').hide();
			$('#betterCheckAgainHasGillsQuestion').show();
		}

	}); // end scalesAndGillsButton click

	$('#softSlimySkinButton').click(function(){

		if (currentId == 'amphibianImg')
		{
			$('.question').hide();
			$('#itsAnAmphibianQuestion').show();

			$('.investigationImg').hide();
			$('#' + currentId).show();

			$('#fishFooter').css('text-decoration', 'line-through');

			$('.btn').hide();
			$('#newThingButton').show();

			choiceCounter = 5;
		}
		else
		{
			$('.question').hide();
			$('#betterCheckAgainHasSlimySkinQuestion').show();
		}

	}); // end solfSlimySkinButton click

	$('#playAgainButton').click(function(){

		reset();
		shuffleAndSetUpImages();

		choiceCounter = 0;

		$('#introHeading').show();

	}); // end playAgainButton click

	$("#investigateButton").click(function(){
		
		if (choiceCounter == 0 && currentId != 'sandwichImg')
		{
			$('#' + currentId).hide();
			$('#itsAliveImg').show();
		}
		else if (choiceCounter == 0 && currentId == 'sandwichImg')
		{
			$('#' + currentId).hide();
			$('#tombstoneImg').show();
		}
		else if (choiceCounter == 2 && (currentId == 'mammalImg' || currentId == 'birdImg'))
		{
			$('#' + currentId).hide();
			$('#warmBloodImg').show();
		}
		else if (choiceCounter == 2 && (currentId == 'reptileImg' || currentId == 'amphibianImg' || currentId == 'fishImg'))
		{
			$('#' + currentId).hide();
			$('#coldBloodImg').show();
		}
		else if (choiceCounter == 3 && currentId == 'mammalImg')
		{
			$('#' + currentId).hide();
			$('#furImg').show();
		}
		else if (choiceCounter == 3 && currentId == 'birdImg')
		{
			$('#' + currentId).hide();
			$('#feathersImg').show();
		}
		else if (choiceCounter == 3 && currentId == 'reptileImg')
		{
			$('#' + currentId).hide();
			$('#landEggsImg').show();
		}
		else if (choiceCounter == 3 && (currentId == 'amphibianImg' || currentId == 'fishImg' ))
		{
			$('#' + currentId).hide();
			$('#waterEggsImg').show();
		}
		else if (choiceCounter == 4 && currentId == 'fishImg')
		{
			$('#' + currentId).hide();
			$('#gillsImg').show();
		}
		else if (choiceCounter == 4 && currentId == 'amphibianImg')
		{
			$('#' + currentId).hide();
			$('#slimySkinImg').show();
		}

	}); // end investigateButton click

	$('#amphibianVocabulary').click(function(){

		alert("Amphibians are cold-blooded animals that live both in the water and on land, lay their eggs in the water, and breath and absorb moisture through their soft and slimy skin.");

	}); // end amphibianVocabulary click

	$('#birdVocabulary').click(function(){

		alert("Birds are warm-blooded animals that have feathers, wings, and a beak with no teeth, and they bear their young by laying eggs on land.");

	}); // end birdVocabulary click

	$('#fishVocabulary').click(function(){

		alert("Fish are cold-blooded animals that live and lay their eggs in the water, breathe through gills, and usually have scales and fins.");

	}); // end fishVocabulary click

	$('#mammalVocabulary').click(function(){

		alert("Mammals have hair somewhere on their bodies, are warm-blooded, and the females have glands that produce milk.");

	}); // end mammalVocabulary click

	$('#reptileVocabulary').click(function(){

		alert("Reptiles are cold-blooded animals that lay their eggs on land, breathe air, and have skin that is covered in scales or bony plates.");

	}); // end reptileVocabulary click


}); // end document ready
