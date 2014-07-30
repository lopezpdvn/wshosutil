DEFAULT_FILE_AGE_THRESHOLD = 0;

function move_older(orig, dest, threshold, criteria) {
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  orig_files = new Enumerator(fso.GetFolder(orig).SubFolders);
  for(; !orig_files.atEnd(); orig_files.moveNext()) {
    WScript.Echo(orig_files.item());
  }
}

function move_file(fp, dest) {
}

function move(orig, dest) {
  //rcopycmd = ROBOCOPY_FP + " \"" + orig + " " + 
  //rcopycmd += " /S /E /MOVE /W:1";
}

function is_old_enough(fp, threshold, criteria) {
  threshold = threshold || DEFAULT_FILE_AGE_THRESHOLD;
  var fso = new ActiveXObject("Scripting.FileSystemObject");

  try {
    f = fso.GetFile(fp);
  }
  catch(e) {
    if((e.number & 0xFFFF) != 53) throw e;
    f = fso.GetFolder(fp);
  }

  switch(criteria) {
    case 0:
      ftime = f.DateLastModified;
      break;
    case 1:
      ftime = f.DateCreated;
      break;
    case 2:
      ftime = f.DateLastAccesed;
      break;
    default:
      ftime = f.DateLastModified;
  }

  ftime = (new Date(ftime)).getTime();
  nowtime = (new Date()).getTime();

  return (nowtime - ftime) >= threshold;
}
