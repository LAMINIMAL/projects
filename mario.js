
drawPyramid(14);


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
    let pyramidNode = document.getElementById("pyramid");

    for (let i = 1; i < height + 1; i++) {
    	let step = document.createElement("div");
        for (let j = 0; j < height - i; j++) {
            let divSpace = document.createElement('div');
            divSpace.className = 'space';
            step.appendChild(divSpace);
        }
        for (let k = 0; k < i + 1; k++) {
            let divHash = document.createElement('div');
            divHash.className = 'hash';
            step.appendChild(divHash);
        }
        // step.textContent = '\u00A0'.repeat(height - i) + '#'.repeat(i + 1);
    	pyramidNode.appendChild(step);
    }
    document.getElementById('construction').remove();
}


