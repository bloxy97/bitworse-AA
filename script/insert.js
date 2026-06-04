function insertThisInThere(thisChar, thereId) {
  function theCursorPosition(ofThisInput) {
    // "NOTE: The first button press will insert the character at your current cursor location in the text area, but any subsequent button presses will insert the character at the very end of the text body until you re-position the cursor in the text area. This is obviously a bug and is totally annoying, but I don't know how to fix it. ヽ(´ー｀)ノ"
    // ^ (IGNORE) this bug is probably caused by the variable being set as zero let's see if changing var to let does anything.  
    // On further observation, maybe if i put the cursor back into the text area after putting a character it'll solve itself.
    // ^ this works!
    // nevermind... it just sends the caret to the mostest character. Hold, please.

    // set fallback location
    var theCursorLocation = 0;

    // find the cursor location via IE method...
    if (document.selection) {
      ofThisInput.focus();
      var theSelectionRange = document.selection.createRange();
      theSelectionRange.moveStart('character', -ofThisInput.value.length);
      theCursorLocation = theSelectionRange.text.length;
    }
    
    else if (ofThisInput.selectionStart || ofThisInput.selectionStart == '0') {
      // or the FF way 
      theCursorLocation = ofThisInput.selectionStart;
    }
    return theCursorLocation;

  }
 
  // now get ready to place our new character(s)...
  var theIdElement = document.getElementById(thereId);
  var currentPos = theCursorPosition(theIdElement);
  var origValue = theIdElement.value;
  var newValue = origValue.substr(0, currentPos) + thisChar + origValue.substr(currentPos);
 
  theIdElement.value = newValue;

  // focus into write box
  document.getElementById("writeBox").focus();

  // reposition cursor
  theIdElement.setSelectionRange(currentPos);

}