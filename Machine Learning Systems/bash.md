---
layout: default
title: Bash Scripting
parent: Machine Learning Systems
nav_order: 2
permalink: /ml-systems/bash-scripting/
---

# Bash Scripting

## '\r': command not found - .bashrc / .bash_profile [duplicate]

When all else fails in Cygwin...

Try running the `dos2unix` command on the file in question.

It might help when you see error messages like this:

`-bash: '\r': command not found`

Windows style newline characters can cause issues in Cygwin.

The `dos2unix` command modifies newline characters so they are Unix / Cygwin compatible.

CAUTION: the `dos2unix` command modifies files in place, so take precaution if necessary.

If you need to keep the original file, you should back it up first.

Note for Mac users: The `dos2unix` command does not exist on Mac OS X.

Check out this answer for a variety of solutions using different tools.

There is also a `unix2dos` command that does the reverse:

It modifies Unix newline characters so they're compatible with Windows tools.

If you open a file with Notepad and all the lines run together, try `unix2dos filename`.

Source: ['\r': command not found - .bashrc / .bash_profile [duplicate]](https://stackoverflow.com/questions/11616835/r-command-not-found-bashrc-bash-profile)

## How To Set Environment Variable in Bash

```bash
export VAR="my value"
```

```bash
echo $VAR
printenv VAR
```

Source: [How To Set Environment Variable in Bash](https://devconnected.com/set-environment-variable-bash-how-to/)

## Index a String in bash

`${string:position}`
> Extracts substring from `$string` at `$position`.

If the `$string` parameter is "*" or "@", then this extracts the positional parameters, starting at `$position`.

`${string:position:length}`
Extracts `$length` characters of substring from `$string` at `$position`.

Source: [Index a String in bash](https://unix.stackexchange.com/questions/303960/index-a-string-in-bash)

## Extract substring in Bash

You can use Parameter Expansion to do this.

If a is constant, the following parameter expansion performs substring extraction:

`b=${a:12:5}`

## echo that outputs to stderr

```>&2 echo "error"```

Source: [echo that outputs to stderr](https://stackoverflow.com/questions/2990414/echo-that-outputs-to-stderr)

## Linux bash exit status and how to set exit status in bash

| Exit Code | Description |
|:----------|:------------|
|0|Success|
|1|Operation not permitted|
|2|No such file or directory|
|3|No such process|
|4|Interrupted system call|
|5|Input/output error|
|6|No such device or address|
|7|Argument list too long|
|8|Exec format error|
|9|Bad file descriptor|
|10|No child processes|
|11|Resource temporarily unavailable|
|12|Cannot allocate memory|
|13|Permission denied|
|14|Bad address|
|15|Block device required|
|16|Device or resource busy|
|17|File exists|
|18|Invalid cross-device link|
|19|No such device|
|20|Not a directory|
|21|Is a directory|
|22|Invalid argument|
|23|Too many open files in system|
|24|Too many open files|
|25|Inappropriate ioctl for device|
|26|Text file busy|
|27|File too large|
|28|No space left on device|
|29|Illegal seek|
|30|Read-only file system|
|31|Too many links|
|32|Broken pipe|
|33|Numerical argument out of domain|
|34|Numerical result out of range|
|35|Resource deadlock avoided|
|36|File name too long|
|37|No locks available|
|38|Function not implemented|
|39|Directory not empty|
|40|Too many levels of symbolic links|
|42|No message of desired type|
|43|Identifier removed|
|44|Channel number out of range|
|45|Level 2 not synchronized|
|46|Level 3 halted|
|47|Level 3 reset|
|48|Link number out of range|
|49|Protocol driver not attached|
|50|No CSI structure available|
|51|Level 2 halted|
|52|Invalid exchange|
|53|Invalid request descriptor|
|54|Exchange full|
|55|No anode|
|56|Invalid request code|
|57|Invalid slot|
|59|Bad font file format|
|60|Device not a stream|
|61|No data available|
|62|Timer expired|
|63|Out of streams resources|
|64|Machine is not on the network|
|65|Package not installed|
|66|Object is remote|
|67|Link has been severed|
|68|Advertise error|
|69|Srmount error|
|70|Communication error on send|
|71|Protocol error|
|72|Multihop attempted|
|73|RFS specific error|
|74|Bad message|
|75|Value too large for defined data type|
|76|Name not unique on network|
|77|File descriptor in bad state|
|78|Remote address changed|
|79|Can not access a needed shared library|
|80|Accessing a corrupted shared library|
|81|.lib section in a.out corrupted|
|82|Attempting to link in too many shared libraries|
|83|Cannot exec a shared library directly|
|84|Invalid or incomplete multibyte or wide character|
|85|Interrupted system call should be restarted|
|86|Streams pipe error|
|87|Too many users|
|88|Socket operation on non-socket|
|89|Destination address required|
|90|Message too long|
|91|Protocol wrong type for socket|
|92|Protocol not available|
|93|Protocol not supported|
|94|Socket type not supported|
|95|Operation not supported|
|96|Protocol family not supported|
|97|Address family not supported by protocol|
|98|Address already in use|
|99|Cannot assign requested address|
|100|Network is down|
|101|Network is unreachable|
|102|Network dropped connection on reset|
|103|Software caused connection abort|
|104|Connection reset by peer|
|105|No buffer space available|
|106|Transport endpoint is already connected|
|107|Transport endpoint is not connected|
|108|Cannot send after transport endpoint shutdown|
|109|Too many references|
|110|Connection timed out|
|111|Connection refused|
|112|Host is down|
|113|No route to host|
|114|Operation already in progress|
|115|Operation now in progress|
|116|Stale file handle|
|117|Structure needs cleaning|
|118|Not a XENIX named type file|
|119|No XENIX semaphores available|
|120|Is a named type file|
|121|Remote I/O error|
|122|Disk quota exceeded|
|123|No medium found|
|125|Operation canceled|
|126|Required key not available|
|127|Key has expired|
|128|Key has been revoked|
|129|Key was rejected by service|
|130|Owner died|
|131|State not recoverable|
|132|Operation not possible due to RF-kill|
|133|Memory page has hardware error|

Source: [Linux bash exit status and how to set exit status in bash](https://www.cyberciti.biz/faq/linux-bash-exit-status-set-exit-statusin-bash/)

## Shell Script : How to check if variable is null or no

```bash
if [[ "$is_always_execute" == null ]];
then
    is_always_execute=false;
fi
```

```bash
if [[ -n "$list_Data" ]]
then
    echo "not Empty"
else
    echo "empty"
fi
```

```bash
if [[ -z "$list_Data" ]]
then
  echo "Empty"
else
  echo "Not empty"
fi
```

Source: [Shell Script : How to check if variable is null or no](https://stackoverflow.com/questions/48261038/shell-script-how-to-check-if-variable-is-null-or-no)

## While loop

```bash
while [ condition ]
do
   command1
   command2
   command3
done
```

Source: [Bash While Loop Examples](https://www.cyberciti.biz/faq/bash-while-loop/)

## Sleep

`sleep <n_SECONDS>`

eg. `sleep 1` - sleep for 1 second

## Compare Strings in Bash

### Example-1: String Comparison using “==” operators

```bash
#!/bin/bash

strval1="Ubuntu"
strval2="Windows"

#Check equality two string variables

if [ $strval1 == $strval2 ]; then
  echo "Strings are equal"
else
  echo "Strings are not equal"
fi

#Check equality of a variable with a string value

if [ $strval1 == "Ubuntu" ]; then
  echo "Linux operating system"
else
  echo "Windows operating system"
fi
```

### Example-2: String Comparison using “!=” operator

```bash
#!/bin/bash

strval1="Ubuntu"
strval2="Windows"

#Check inequality of a variable with a string value

if [ $strval2 != "Ubuntu" ]; then
  echo "Windows operating system"
else
  echo "Linux operating system"
fi
```

### Example-3: Partial String Comparison

```bash
#!/bin/bash

strval="Microsoft Internet Explorer"

if [[ $strval == *Internet* ]];
then
  echo "Partially Match"
else
  echo "No Match"
fi

if [[ $strval == *internet* ]];
then
  echo "Partially Match"
else
  echo "No Match"
fi
```

### Example-4: Compare string with user input value

```bash
#!/bin/bash

echo "Enter Your Name"
read input

if [ $input != "Fahmida" ];
then
  echo "No Record Found"
else
  echo "Record Found"
fi
```

Source: [How to compare strings in Bash](https://linuxhint.com/compare_strings_bash/)

## Create a bash script

Place a `shebang` at the top of the script

```bash
#!/bin/bash
```

## Running a bash script

Use:

`bash scriptname.sh`

instead of:

`sh scriptname.sh`

## if..else Statement

### if statement

```bash
if TEST-COMMAND
then
  STATEMENTS
fi
```

### if else statement

```bash
if TEST-COMMAND
then
  STATEMENTS1
else
  STATEMENTS2
fi
```

### if..elif..else

```bash
if TEST-COMMAND1
then
  STATEMENTS1
elif TEST-COMMAND2
then
  STATEMENTS2
else
  STATEMENTS3
fi
```

### nested if

```bash
#!/bin/bash

echo -n "Enter the first number: "
read VAR1
echo -n "Enter the second number: "
read VAR2
echo -n "Enter the third number: "
read VAR3

if [[ $VAR1 -ge $VAR2 ]]
then
  if [[ $VAR1 -ge $VAR3 ]]
  then
    echo "$VAR1 is the largest number."
  else
    echo "$VAR3 is the largest number."
  fi
else
  if [[ $VAR2 -ge $VAR3 ]]
  then
    echo "$VAR2 is the largest number."
  else
    echo "$VAR3 is the largest number."
  fi
fi
```

### multiple conditions

```bash
#!/bin/bash

echo -n "Enter the first number: "
read VAR1
echo -n "Enter the second number: "
read VAR2
echo -n "Enter the third number: "
read VAR3

if [[ $VAR1 -ge $VAR2 ]] && [[ $VAR1 -ge $VAR3 ]]
then
  echo "$VAR1 is the largest number."
elif [[ $VAR2 -ge $VAR1 ]] && [[ $VAR2 -ge $VAR3 ]]
then
  echo "$VAR2 is the largest number."
else
  echo "$VAR3 is the largest number."
fi
```

Below are some of the most commonly used operators:
- `-n VAR` - True if the length of VAR is greater than zero.
- `-z VAR` - True if the VAR is empty.
- `STRING1 = STRING2` - True if STRING1 and STRING2 are equal.
- `STRING1 != STRING2` - True if STRING1 and STRING2 are not equal.
- `INTEGER1 -eq INTEGER2` - True if INTEGER1 and INTEGER2 are equal.
- `INTEGER1 -gt INTEGER2` - True if INTEGER1 is greater than INTEGER2.
- `INTEGER1 -lt INTEGER2` - True if INTEGER1 is less than INTEGER2.
- `INTEGER1 -ge INTEGER2` - True if INTEGER1 is equal or greater than INTEGER2.
- `INTEGER1 -le INTEGER2` - True if INTEGER1 is equal or less than INTEGER2.
- `-h FILE` - True if the FILE exists and is a symbolic link.
- `-r FILE` - True if the FILE exists and is readable.
- `-w FILE` - True if the FILE exists and is writable.
- `-x FILE` - True if the FILE exists and is executable.
- `-d FILE` - True if the FILE exists and is a directory.
- `-e FILE` - True if the FILE exists and is a file, regardless of type (node, directory, socket, etc.).
- `-f FILE` - True if the FILE exists and is a regular file (not a directory or device).

Source: [Bash if..else Statement](https://linuxize.com/post/bash-if-else-statement/)

## How to Evaluate Strings as Numbers in Bash

To convert strings to integers in bash, wrap them in `$((X))`. Like this:
```bash
$((string))
```

## What is .bashrc file in Linux?

Source: https://www.digitalocean.com/community/tutorials/bashrc-file-in-linux

## How to Create and Use Alias Command in Linux

```bash
alias shortName="your custom command here"
```

Creating Permanent Aliases

```bash
vim ~/.bashrc
#My custom aliases
alias home=”ssh -i ~/.ssh/mykep.pem tecmint@192.168.0.100”
alias ll="ls -alF"
```

```bash
source ~/.bashrc
```

Source: https://www.tecmint.com/create-alias-in-linux/

## The `set` builtin

- https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html

## bash : Bad Substitution

Make sure your script didnt have

`#!/bin/sh `

at the top of your script. Instead, you should add

`#!/bin/bash`

https://stackoverflow.com/questions/20615217/bash-bad-substitution

## Understanding Exit Codes and Using them in Bash scripts

- https://madflojo.medium.com/understanding-exit-codes-in-bash-6942a8b96ce5

