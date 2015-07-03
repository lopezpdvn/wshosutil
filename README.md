# wshosutil ###########################################################

Windows operating system utilities for Windows Script Host. Use when nothing
else is available, or just for fun.

# Examples of jobs ####################################################

Examples of use of jobs::
  ```
  cscript wshutil.wsf //nologo //b //Job:"move_older" <config_dir> <origin> <destination> <threshold_age> <created_or_modified>

  cscript wshutil.wsf //nologo //b //Job:"sync_mirrors" <dir> <dir>
  ```

# Installation ########################################################

This program depends on [Windows Script
Host](https://en.wikipedia.org/wiki/Windows_Script_Host) and `robocopy`.
