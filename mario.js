
drawPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function drawPyramid(height) {
    // MY DUMB CODE
    // const hash = '#';
    // const space = ' ';

    // for (let i = 0; i < height; i++) {
    //  	let step = '';
    //  	let countSpaces = height - i - 1;
    //  	let countHashes = 2 + i;
    //  	for (let j = 0; j < countSpaces; j++) {
    //  		step += space;
    //  	}
    //  	for (let k = 0; k < countHashes; k++) {
    //  		step += hash;
    //  	}
    //  	console.log(step);
    // }

    // BEST CODE
    let pyramidNode = document.getElementById("pyramid");

    for (let i = 1; i < height + 1; i++) {
    	let step = document.createElement("p");
    	step.textContent = '\u00A0'.repeat(height - i) + '#'.repeat(i + 1);
    	pyramidNode.appendChild(step);
    }
    document.getElementById('construction').remove();
}

//let a = document.getElementById("pyramid");
//a.textContent = 'fuck off';

