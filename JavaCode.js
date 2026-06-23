public class StudentInfo {
    import
    java
.
    util
.
    Scanner;

    public class
    StudentInfo {

    public static void

    main (String

    [ ]
    args
) {

    Scanner
    scanner = new Scanner (System.in);

    // Input
    System
.
    out
.

    print (

    "Enter Full Name: "
)
    ;
    String
    fullName = scanner.nextLine ();

    System
.
    out
.

    print (

    "Enter Index Number: "
)
    ;
    String
    indexNumber = scanner.nextLine ();

    System
.
    out
.

    print (

    "Enter Age: "
)
    ;
    int
    age = scanner.nextInt ();

    scanner
.

    nextLine (); // clear buffer

    System
.
    out
.

    print (

    "Enter Gender (M/F): "
)
    ;
    String
    gender = scanner.nextLine ();

    System
.
    out
.

    print (

    "Enter Department: "
)
    ;
    String
    department = scanner.nextLine ();

    System
.
    out
.

    print (

    "Enter Level: "
)
    ;
    int
    level = scanner.nextInt ();

    System
.
    out
.

    print (

    "Enter GPA: "
)
    ;
    double
    gpa = scanner.nextDouble ();

    // Adult Status
    String
    adultStatus;

    if (age

>=
    18
) {
    adultStatus = "YES";
}

else
{
    adultStatus = "NO";
}

// GPA Classification
String
academicClass;

if (gpa >= 3.5 && gpa <= 4.0) {
    academicClass = "First Class";
} else if (gpa >= 3.0) {
    academicClass = "Second Class Upper";
} else if (gpa >= 2.5) {
    academicClass = "Second Class Lower";
} else {
    academicClass = "Pass";
}

// Output
System.out.println ("\n===== STUDENT PROFILE =====");

System.out.println ("Name: " + fullName);
System.out.println ("Index: " + indexNumber);
System.out.println ("Age: " + age);
System.out.println ("Gender: " + gender);
System.out.println ("Department: " + department);
System.out.println ("Level: " + level);
System.out.println ("GPA: " + gpa);

System.out.println ();
System.out.println ("Adult Status: " + adultStatus);
System.out.println ("Academic Class: " + academicClass);

System.out.println ("==========================");

scanner.close ();
}


}