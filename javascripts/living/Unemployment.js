am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_myTheme1);
    // Themes end
    
    am4core.options.onlyShowOnViewport = true;
    am4core.options.queue = false;

    // Create chart instance
    var chart = am4core.create("chartdivue", am4charts.XYChart);
    
    // Add data
    chart.data = [
        {
          "Year/Period": "8/1981 - 10/1981",
          "Unemployment rate (seasonally adjusted) (%)": 3.4
        },
        {
          "Year/Period": "9/1981 - 11/1981",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "10/1981 - 12/1981",
          "Unemployment rate (seasonally adjusted) (%)": 3.1
        },
        {
          "Year/Period": "11/1981 - 1/1982",
          "Unemployment rate (seasonally adjusted) (%)": 3.1
        },
        {
          "Year/Period": "12/1981 - 2/1982",
          "Unemployment rate (seasonally adjusted) (%)": 3.1
        },
        {
          "Year/Period": "1/1982 - 3/1982",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "2/1982 - 4/1982",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "3/1982 - 5/1982",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "4/1982 - 6/1982",
          "Unemployment rate (seasonally adjusted) (%)": 3.4
        },
        {
          "Year/Period": "5/1982 - 7/1982",
          "Unemployment rate (seasonally adjusted) (%)": 3.6
        },
        {
          "Year/Period": "6/1982 - 8/1982",
          "Unemployment rate (seasonally adjusted) (%)": 3.7
        },
        {
          "Year/Period": "7/1982 - 9/1982",
          "Unemployment rate (seasonally adjusted) (%)": 3.9
        },
        {
          "Year/Period": "8/1982 - 10/1982",
          "Unemployment rate (seasonally adjusted) (%)": 3.9
        },
        {
          "Year/Period": "9/1982 - 11/1982",
          "Unemployment rate (seasonally adjusted) (%)": 3.9
        },
        {
          "Year/Period": "10/1982 - 12/1982",
          "Unemployment rate (seasonally adjusted) (%)": 4.1
        },
        {
          "Year/Period": "11/1982 - 1/1983",
          "Unemployment rate (seasonally adjusted) (%)": 4.6
        },
        {
          "Year/Period": "12/1982 - 2/1983",
          "Unemployment rate (seasonally adjusted) (%)": 4.7
        },
        {
          "Year/Period": "1/1983 - 3/1983",
          "Unemployment rate (seasonally adjusted) (%)": 5
        },
        {
          "Year/Period": "2/1983 - 4/1983",
          "Unemployment rate (seasonally adjusted) (%)": 5.1
        },
        {
          "Year/Period": "3/1983 - 5/1983",
          "Unemployment rate (seasonally adjusted) (%)": 5.2
        },
        {
          "Year/Period": "4/1983 - 6/1983",
          "Unemployment rate (seasonally adjusted) (%)": 4.8
        },
        {
          "Year/Period": "5/1983 - 7/1983",
          "Unemployment rate (seasonally adjusted) (%)": 4.1
        },
        {
          "Year/Period": "6/1983 - 8/1983",
          "Unemployment rate (seasonally adjusted) (%)": 3.8
        },
        {
          "Year/Period": "7/1983 - 9/1983",
          "Unemployment rate (seasonally adjusted) (%)": 4
        },
        {
          "Year/Period": "8/1983 - 10/1983",
          "Unemployment rate (seasonally adjusted) (%)": 4.1
        },
        {
          "Year/Period": "9/1983 - 11/1983",
          "Unemployment rate (seasonally adjusted) (%)": 4.2
        },
        {
          "Year/Period": "10/1983 - 12/1983",
          "Unemployment rate (seasonally adjusted) (%)": 4.3
        },
        {
          "Year/Period": "11/1983 - 1/1984",
          "Unemployment rate (seasonally adjusted) (%)": 3.9
        },
        {
          "Year/Period": "12/1983 - 2/1984",
          "Unemployment rate (seasonally adjusted) (%)": 4.1
        },
        {
          "Year/Period": "1/1984 - 3/1984",
          "Unemployment rate (seasonally adjusted) (%)": 3.9
        },
        {
          "Year/Period": "2/1984 - 4/1984",
          "Unemployment rate (seasonally adjusted) (%)": 3.9
        },
        {
          "Year/Period": "3/1984 - 5/1984",
          "Unemployment rate (seasonally adjusted) (%)": 3.9
        },
        {
          "Year/Period": "4/1984 - 6/1984",
          "Unemployment rate (seasonally adjusted) (%)": 3.9
        },
        {
          "Year/Period": "5/1984 - 7/1984",
          "Unemployment rate (seasonally adjusted) (%)": 3.9
        },
        {
          "Year/Period": "6/1984 - 8/1984",
          "Unemployment rate (seasonally adjusted) (%)": 3.7
        },
        {
          "Year/Period": "7/1984 - 9/1984",
          "Unemployment rate (seasonally adjusted) (%)": 3.7
        },
        {
          "Year/Period": "8/1984 - 10/1984",
          "Unemployment rate (seasonally adjusted) (%)": 3.8
        },
        {
          "Year/Period": "9/1984 - 11/1984",
          "Unemployment rate (seasonally adjusted) (%)": 3.8
        },
        {
          "Year/Period": "10/1984 - 12/1984",
          "Unemployment rate (seasonally adjusted) (%)": 4
        },
        {
          "Year/Period": "11/1984 - 1/1985",
          "Unemployment rate (seasonally adjusted) (%)": 3.7
        },
        {
          "Year/Period": "12/1984 - 2/1985",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "1/1985 - 3/1985",
          "Unemployment rate (seasonally adjusted) (%)": 2.9
        },
        {
          "Year/Period": "2/1985 - 4/1985",
          "Unemployment rate (seasonally adjusted) (%)": 3
        },
        {
          "Year/Period": "3/1985 - 5/1985",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "4/1985 - 6/1985",
          "Unemployment rate (seasonally adjusted) (%)": 3.1
        },
        {
          "Year/Period": "5/1985 - 7/1985",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "6/1985 - 8/1985",
          "Unemployment rate (seasonally adjusted) (%)": 3.4
        },
        {
          "Year/Period": "7/1985 - 9/1985",
          "Unemployment rate (seasonally adjusted) (%)": 3.5
        },
        {
          "Year/Period": "8/1985 - 10/1985",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "9/1985 - 11/1985",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "10/1985 - 12/1985",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "11/1985 - 1/1986",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "12/1985 - 2/1986",
          "Unemployment rate (seasonally adjusted) (%)": 3.1
        },
        {
          "Year/Period": "1/1986 - 3/1986",
          "Unemployment rate (seasonally adjusted) (%)": 3.1
        },
        {
          "Year/Period": "2/1986 - 4/1986",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "3/1986 - 5/1986",
          "Unemployment rate (seasonally adjusted) (%)": 3.1
        },
        {
          "Year/Period": "4/1986 - 6/1986",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "5/1986 - 7/1986",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "6/1986 - 8/1986",
          "Unemployment rate (seasonally adjusted) (%)": 3.1
        },
        {
          "Year/Period": "7/1986 - 9/1986",
          "Unemployment rate (seasonally adjusted) (%)": 2.9
        },
        {
          "Year/Period": "8/1986 - 10/1986",
          "Unemployment rate (seasonally adjusted) (%)": 2.6
        },
        {
          "Year/Period": "9/1986 - 11/1986",
          "Unemployment rate (seasonally adjusted) (%)": 2.3
        },
        {
          "Year/Period": "10/1986 - 12/1986",
          "Unemployment rate (seasonally adjusted) (%)": 2.1
        },
        {
          "Year/Period": "11/1986 - 1/1987",
          "Unemployment rate (seasonally adjusted) (%)": 2
        },
        {
          "Year/Period": "12/1986 - 2/1987",
          "Unemployment rate (seasonally adjusted) (%)": 2
        },
        {
          "Year/Period": "1/1987 - 3/1987",
          "Unemployment rate (seasonally adjusted) (%)": 2
        },
        {
          "Year/Period": "2/1987 - 4/1987",
          "Unemployment rate (seasonally adjusted) (%)": 1.9
        },
        {
          "Year/Period": "3/1987 - 5/1987",
          "Unemployment rate (seasonally adjusted) (%)": 1.7
        },
        {
          "Year/Period": "4/1987 - 6/1987",
          "Unemployment rate (seasonally adjusted) (%)": 1.7
        },
        {
          "Year/Period": "5/1987 - 7/1987",
          "Unemployment rate (seasonally adjusted) (%)": 1.7
        },
        {
          "Year/Period": "6/1987 - 8/1987",
          "Unemployment rate (seasonally adjusted) (%)": 1.6
        },
        {
          "Year/Period": "7/1987 - 9/1987",
          "Unemployment rate (seasonally adjusted) (%)": 1.6
        },
        {
          "Year/Period": "8/1987 - 10/1987",
          "Unemployment rate (seasonally adjusted) (%)": 1.7
        },
        {
          "Year/Period": "9/1987 - 11/1987",
          "Unemployment rate (seasonally adjusted) (%)": 1.7
        },
        {
          "Year/Period": "10/1987 - 12/1987",
          "Unemployment rate (seasonally adjusted) (%)": 1.7
        },
        {
          "Year/Period": "11/1987 - 1/1988",
          "Unemployment rate (seasonally adjusted) (%)": 1.7
        },
        {
          "Year/Period": "12/1987 - 2/1988",
          "Unemployment rate (seasonally adjusted) (%)": 1.5
        },
        {
          "Year/Period": "1/1988 - 3/1988",
          "Unemployment rate (seasonally adjusted) (%)": 1.4
        },
        {
          "Year/Period": "2/1988 - 4/1988",
          "Unemployment rate (seasonally adjusted) (%)": 1.5
        },
        {
          "Year/Period": "3/1988 - 5/1988",
          "Unemployment rate (seasonally adjusted) (%)": 1.5
        },
        {
          "Year/Period": "4/1988 - 6/1988",
          "Unemployment rate (seasonally adjusted) (%)": 1.7
        },
        {
          "Year/Period": "5/1988 - 7/1988",
          "Unemployment rate (seasonally adjusted) (%)": 1.5
        },
        {
          "Year/Period": "6/1988 - 8/1988",
          "Unemployment rate (seasonally adjusted) (%)": 1.5
        },
        {
          "Year/Period": "7/1988 - 9/1988",
          "Unemployment rate (seasonally adjusted) (%)": 1.3
        },
        {
          "Year/Period": "8/1988 - 10/1988",
          "Unemployment rate (seasonally adjusted) (%)": 1.2
        },
        {
          "Year/Period": "9/1988 - 11/1988",
          "Unemployment rate (seasonally adjusted) (%)": 1.1
        },
        {
          "Year/Period": "10/1988 - 12/1988",
          "Unemployment rate (seasonally adjusted) (%)": 1.1
        },
        {
          "Year/Period": "11/1988 - 1/1989",
          "Unemployment rate (seasonally adjusted) (%)": 1.1
        },
        {
          "Year/Period": "12/1988 - 2/1989",
          "Unemployment rate (seasonally adjusted) (%)": 1.1
        },
        {
          "Year/Period": "1/1989 - 3/1989",
          "Unemployment rate (seasonally adjusted) (%)": 1.1
        },
        {
          "Year/Period": "2/1989 - 4/1989",
          "Unemployment rate (seasonally adjusted) (%)": 1.2
        },
        {
          "Year/Period": "3/1989 - 5/1989",
          "Unemployment rate (seasonally adjusted) (%)": 1.2
        },
        {
          "Year/Period": "4/1989 - 6/1989",
          "Unemployment rate (seasonally adjusted) (%)": 1.1
        },
        {
          "Year/Period": "5/1989 - 7/1989",
          "Unemployment rate (seasonally adjusted) (%)": 1
        },
        {
          "Year/Period": "6/1989 - 8/1989",
          "Unemployment rate (seasonally adjusted) (%)": 1
        },
        {
          "Year/Period": "7/1989 - 9/1989",
          "Unemployment rate (seasonally adjusted) (%)": 1.1
        },
        {
          "Year/Period": "8/1989 - 10/1989",
          "Unemployment rate (seasonally adjusted) (%)": 1
        },
        {
          "Year/Period": "9/1989 - 11/1989",
          "Unemployment rate (seasonally adjusted) (%)": 1.1
        },
        {
          "Year/Period": "10/1989 - 12/1989",
          "Unemployment rate (seasonally adjusted) (%)": 1
        },
        {
          "Year/Period": "11/1989 - 1/1990",
          "Unemployment rate (seasonally adjusted) (%)": 1.2
        },
        {
          "Year/Period": "12/1989 - 2/1990",
          "Unemployment rate (seasonally adjusted) (%)": 1.4
        },
        {
          "Year/Period": "1/1990 - 3/1990",
          "Unemployment rate (seasonally adjusted) (%)": 1.5
        },
        {
          "Year/Period": "2/1990 - 4/1990",
          "Unemployment rate (seasonally adjusted) (%)": 1.4
        },
        {
          "Year/Period": "3/1990 - 5/1990",
          "Unemployment rate (seasonally adjusted) (%)": 1.4
        },
        {
          "Year/Period": "4/1990 - 6/1990",
          "Unemployment rate (seasonally adjusted) (%)": 1.3
        },
        {
          "Year/Period": "5/1990 - 7/1990",
          "Unemployment rate (seasonally adjusted) (%)": 1.4
        },
        {
          "Year/Period": "6/1990 - 8/1990",
          "Unemployment rate (seasonally adjusted) (%)": 1.3
        },
        {
          "Year/Period": "7/1990 - 9/1990",
          "Unemployment rate (seasonally adjusted) (%)": 1.4
        },
        {
          "Year/Period": "8/1990 - 10/1990",
          "Unemployment rate (seasonally adjusted) (%)": 1.2
        },
        {
          "Year/Period": "9/1990 - 11/1990",
          "Unemployment rate (seasonally adjusted) (%)": 1.2
        },
        {
          "Year/Period": "10/1990 - 12/1990",
          "Unemployment rate (seasonally adjusted) (%)": 1.2
        },
        {
          "Year/Period": "11/1990 - 1/1991",
          "Unemployment rate (seasonally adjusted) (%)": 1.3
        },
        {
          "Year/Period": "12/1990 - 2/1991",
          "Unemployment rate (seasonally adjusted) (%)": 1.4
        },
        {
          "Year/Period": "1/1991 - 3/1991",
          "Unemployment rate (seasonally adjusted) (%)": 1.6
        },
        {
          "Year/Period": "2/1991 - 4/1991",
          "Unemployment rate (seasonally adjusted) (%)": 1.7
        },
        {
          "Year/Period": "3/1991 - 5/1991",
          "Unemployment rate (seasonally adjusted) (%)": 2
        },
        {
          "Year/Period": "4/1991 - 6/1991",
          "Unemployment rate (seasonally adjusted) (%)": 1.9
        },
        {
          "Year/Period": "5/1991 - 7/1991",
          "Unemployment rate (seasonally adjusted) (%)": 1.9
        },
        {
          "Year/Period": "6/1991 - 8/1991",
          "Unemployment rate (seasonally adjusted) (%)": 1.8
        },
        {
          "Year/Period": "7/1991 - 9/1991",
          "Unemployment rate (seasonally adjusted) (%)": 1.8
        },
        {
          "Year/Period": "8/1991 - 10/1991",
          "Unemployment rate (seasonally adjusted) (%)": 1.8
        },
        {
          "Year/Period": "9/1991 - 11/1991",
          "Unemployment rate (seasonally adjusted) (%)": 1.8
        },
        {
          "Year/Period": "10/1991 - 12/1991",
          "Unemployment rate (seasonally adjusted) (%)": 1.9
        },
        {
          "Year/Period": "11/1991 - 1/1992",
          "Unemployment rate (seasonally adjusted) (%)": 2.1
        },
        {
          "Year/Period": "12/1991 - 2/1992",
          "Unemployment rate (seasonally adjusted) (%)": 2.2
        },
        {
          "Year/Period": "1/1992 - 3/1992",
          "Unemployment rate (seasonally adjusted) (%)": 2.2
        },
        {
          "Year/Period": "2/1992 - 4/1992",
          "Unemployment rate (seasonally adjusted) (%)": 2
        },
        {
          "Year/Period": "3/1992 - 5/1992",
          "Unemployment rate (seasonally adjusted) (%)": 2
        },
        {
          "Year/Period": "4/1992 - 6/1992",
          "Unemployment rate (seasonally adjusted) (%)": 1.9
        },
        {
          "Year/Period": "5/1992 - 7/1992",
          "Unemployment rate (seasonally adjusted) (%)": 1.8
        },
        {
          "Year/Period": "6/1992 - 8/1992",
          "Unemployment rate (seasonally adjusted) (%)": 1.6
        },
        {
          "Year/Period": "7/1992 - 9/1992",
          "Unemployment rate (seasonally adjusted) (%)": 1.6
        },
        {
          "Year/Period": "8/1992 - 10/1992",
          "Unemployment rate (seasonally adjusted) (%)": 1.9
        },
        {
          "Year/Period": "9/1992 - 11/1992",
          "Unemployment rate (seasonally adjusted) (%)": 2
        },
        {
          "Year/Period": "10/1992 - 12/1992",
          "Unemployment rate (seasonally adjusted) (%)": 2.4
        },
        {
          "Year/Period": "11/1992 - 1/1993",
          "Unemployment rate (seasonally adjusted) (%)": 2.2
        },
        {
          "Year/Period": "12/1992 - 2/1993",
          "Unemployment rate (seasonally adjusted) (%)": 2.2
        },
        {
          "Year/Period": "1/1993 - 3/1993",
          "Unemployment rate (seasonally adjusted) (%)": 2.1
        },
        {
          "Year/Period": "2/1993 - 4/1993",
          "Unemployment rate (seasonally adjusted) (%)": 1.9
        },
        {
          "Year/Period": "3/1993 - 5/1993",
          "Unemployment rate (seasonally adjusted) (%)": 1.8
        },
        {
          "Year/Period": "4/1993 - 6/1993",
          "Unemployment rate (seasonally adjusted) (%)": 1.8
        },
        {
          "Year/Period": "5/1993 - 7/1993",
          "Unemployment rate (seasonally adjusted) (%)": 1.9
        },
        {
          "Year/Period": "6/1993 - 8/1993",
          "Unemployment rate (seasonally adjusted) (%)": 1.9
        },
        {
          "Year/Period": "7/1993 - 9/1993",
          "Unemployment rate (seasonally adjusted) (%)": 1.9
        },
        {
          "Year/Period": "8/1993 - 10/1993",
          "Unemployment rate (seasonally adjusted) (%)": 2
        },
        {
          "Year/Period": "9/1993 - 11/1993",
          "Unemployment rate (seasonally adjusted) (%)": 2.1
        },
        {
          "Year/Period": "10/1993 - 12/1993",
          "Unemployment rate (seasonally adjusted) (%)": 2.1
        },
        {
          "Year/Period": "11/1993 - 1/1994",
          "Unemployment rate (seasonally adjusted) (%)": 2
        },
        {
          "Year/Period": "12/1993 - 2/1994",
          "Unemployment rate (seasonally adjusted) (%)": 1.8
        },
        {
          "Year/Period": "1/1994 - 3/1994",
          "Unemployment rate (seasonally adjusted) (%)": 1.9
        },
        {
          "Year/Period": "2/1994 - 4/1994",
          "Unemployment rate (seasonally adjusted) (%)": 1.7
        },
        {
          "Year/Period": "3/1994 - 5/1994",
          "Unemployment rate (seasonally adjusted) (%)": 1.7
        },
        {
          "Year/Period": "4/1994 - 6/1994",
          "Unemployment rate (seasonally adjusted) (%)": 1.5
        },
        {
          "Year/Period": "5/1994 - 7/1994",
          "Unemployment rate (seasonally adjusted) (%)": 1.7
        },
        {
          "Year/Period": "6/1994 - 8/1994",
          "Unemployment rate (seasonally adjusted) (%)": 1.9
        },
        {
          "Year/Period": "7/1994 - 9/1994",
          "Unemployment rate (seasonally adjusted) (%)": 2.3
        },
        {
          "Year/Period": "8/1994 - 10/1994",
          "Unemployment rate (seasonally adjusted) (%)": 2.2
        },
        {
          "Year/Period": "9/1994 - 11/1994",
          "Unemployment rate (seasonally adjusted) (%)": 2.2
        },
        {
          "Year/Period": "10/1994 - 12/1994",
          "Unemployment rate (seasonally adjusted) (%)": 2
        },
        {
          "Year/Period": "11/1994 - 1/1995",
          "Unemployment rate (seasonally adjusted) (%)": 2.2
        },
        {
          "Year/Period": "12/1994 - 2/1995",
          "Unemployment rate (seasonally adjusted) (%)": 2.4
        },
        {
          "Year/Period": "1/1995 - 3/1995",
          "Unemployment rate (seasonally adjusted) (%)": 2.5
        },
        {
          "Year/Period": "2/1995 - 4/1995",
          "Unemployment rate (seasonally adjusted) (%)": 2.6
        },
        {
          "Year/Period": "3/1995 - 5/1995",
          "Unemployment rate (seasonally adjusted) (%)": 2.5
        },
        {
          "Year/Period": "4/1995 - 6/1995",
          "Unemployment rate (seasonally adjusted) (%)": 2.9
        },
        {
          "Year/Period": "5/1995 - 7/1995",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "6/1995 - 8/1995",
          "Unemployment rate (seasonally adjusted) (%)": 3.6
        },
        {
          "Year/Period": "7/1995 - 9/1995",
          "Unemployment rate (seasonally adjusted) (%)": 3.7
        },
        {
          "Year/Period": "8/1995 - 10/1995",
          "Unemployment rate (seasonally adjusted) (%)": 3.6
        },
        {
          "Year/Period": "9/1995 - 11/1995",
          "Unemployment rate (seasonally adjusted) (%)": 3.7
        },
        {
          "Year/Period": "10/1995 - 12/1995",
          "Unemployment rate (seasonally adjusted) (%)": 3.7
        },
        {
          "Year/Period": "11/1995 - 1/1996",
          "Unemployment rate (seasonally adjusted) (%)": 3.4
        },
        {
          "Year/Period": "12/1995 - 2/1996",
          "Unemployment rate (seasonally adjusted) (%)": 3.1
        },
        {
          "Year/Period": "1/1996 - 3/1996",
          "Unemployment rate (seasonally adjusted) (%)": 2.9
        },
        {
          "Year/Period": "2/1996 - 4/1996",
          "Unemployment rate (seasonally adjusted) (%)": 2.9
        },
        {
          "Year/Period": "3/1996 - 5/1996",
          "Unemployment rate (seasonally adjusted) (%)": 3
        },
        {
          "Year/Period": "4/1996 - 6/1996",
          "Unemployment rate (seasonally adjusted) (%)": 2.9
        },
        {
          "Year/Period": "5/1996 - 7/1996",
          "Unemployment rate (seasonally adjusted) (%)": 2.9
        },
        {
          "Year/Period": "6/1996 - 8/1996",
          "Unemployment rate (seasonally adjusted) (%)": 2.7
        },
        {
          "Year/Period": "7/1996 - 9/1996",
          "Unemployment rate (seasonally adjusted) (%)": 2.6
        },
        {
          "Year/Period": "8/1996 - 10/1996",
          "Unemployment rate (seasonally adjusted) (%)": 2.5
        },
        {
          "Year/Period": "9/1996 - 11/1996",
          "Unemployment rate (seasonally adjusted) (%)": 2.6
        },
        {
          "Year/Period": "10/1996 - 12/1996",
          "Unemployment rate (seasonally adjusted) (%)": 2.5
        },
        {
          "Year/Period": "11/1996 - 1/1997",
          "Unemployment rate (seasonally adjusted) (%)": 2.5
        },
        {
          "Year/Period": "12/1996 - 2/1997",
          "Unemployment rate (seasonally adjusted) (%)": 2.3
        },
        {
          "Year/Period": "1/1997 - 3/1997",
          "Unemployment rate (seasonally adjusted) (%)": 2.3
        },
        {
          "Year/Period": "2/1997 - 4/1997",
          "Unemployment rate (seasonally adjusted) (%)": 2.3
        },
        {
          "Year/Period": "3/1997 - 5/1997",
          "Unemployment rate (seasonally adjusted) (%)": 2.2
        },
        {
          "Year/Period": "4/1997 - 6/1997",
          "Unemployment rate (seasonally adjusted) (%)": 2.2
        },
        {
          "Year/Period": "5/1997 - 7/1997",
          "Unemployment rate (seasonally adjusted) (%)": 2.2
        },
        {
          "Year/Period": "6/1997 - 8/1997",
          "Unemployment rate (seasonally adjusted) (%)": 2.1
        },
        {
          "Year/Period": "7/1997 - 9/1997",
          "Unemployment rate (seasonally adjusted) (%)": 2.1
        },
        {
          "Year/Period": "8/1997 - 10/1997",
          "Unemployment rate (seasonally adjusted) (%)": 2.2
        },
        {
          "Year/Period": "9/1997 - 11/1997",
          "Unemployment rate (seasonally adjusted) (%)": 2.2
        },
        {
          "Year/Period": "10/1997 - 12/1997",
          "Unemployment rate (seasonally adjusted) (%)": 2.2
        },
        {
          "Year/Period": "11/1997 - 1/1998",
          "Unemployment rate (seasonally adjusted) (%)": 2.4
        },
        {
          "Year/Period": "12/1997 - 2/1998",
          "Unemployment rate (seasonally adjusted) (%)": 3
        },
        {
          "Year/Period": "1/1998 - 3/1998",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "2/1998 - 4/1998",
          "Unemployment rate (seasonally adjusted) (%)": 3.6
        },
        {
          "Year/Period": "3/1998 - 5/1998",
          "Unemployment rate (seasonally adjusted) (%)": 3.9
        },
        {
          "Year/Period": "4/1998 - 6/1998",
          "Unemployment rate (seasonally adjusted) (%)": 4.3
        },
        {
          "Year/Period": "5/1998 - 7/1998",
          "Unemployment rate (seasonally adjusted) (%)": 4.8
        },
        {
          "Year/Period": "6/1998 - 8/1998",
          "Unemployment rate (seasonally adjusted) (%)": 4.9
        },
        {
          "Year/Period": "7/1998 - 9/1998",
          "Unemployment rate (seasonally adjusted) (%)": 5.2
        },
        {
          "Year/Period": "8/1998 - 10/1998",
          "Unemployment rate (seasonally adjusted) (%)": 5.4
        },
        {
          "Year/Period": "9/1998 - 11/1998",
          "Unemployment rate (seasonally adjusted) (%)": 5.5
        },
        {
          "Year/Period": "10/1998 - 12/1998",
          "Unemployment rate (seasonally adjusted) (%)": 5.9
        },
        {
          "Year/Period": "11/1998 - 1/1999",
          "Unemployment rate (seasonally adjusted) (%)": 6.4
        },
        {
          "Year/Period": "12/1998 - 2/1999",
          "Unemployment rate (seasonally adjusted) (%)": 6.4
        },
        {
          "Year/Period": "1/1999 - 3/1999",
          "Unemployment rate (seasonally adjusted) (%)": 6.3
        },
        {
          "Year/Period": "2/1999 - 4/1999",
          "Unemployment rate (seasonally adjusted) (%)": 6.2
        },
        {
          "Year/Period": "3/1999 - 5/1999",
          "Unemployment rate (seasonally adjusted) (%)": 6.2
        },
        {
          "Year/Period": "4/1999 - 6/1999",
          "Unemployment rate (seasonally adjusted) (%)": 6.1
        },
        {
          "Year/Period": "5/1999 - 7/1999",
          "Unemployment rate (seasonally adjusted) (%)": 6.1
        },
        {
          "Year/Period": "6/1999 - 8/1999",
          "Unemployment rate (seasonally adjusted) (%)": 6.1
        },
        {
          "Year/Period": "7/1999 - 9/1999",
          "Unemployment rate (seasonally adjusted) (%)": 6.3
        },
        {
          "Year/Period": "8/1999 - 10/1999",
          "Unemployment rate (seasonally adjusted) (%)": 6.3
        },
        {
          "Year/Period": "9/1999 - 11/1999",
          "Unemployment rate (seasonally adjusted) (%)": 6.3
        },
        {
          "Year/Period": "10/1999 - 12/1999",
          "Unemployment rate (seasonally adjusted) (%)": 6.3
        },
        {
          "Year/Period": "11/1999 - 1/2000",
          "Unemployment rate (seasonally adjusted) (%)": 6
        },
        {
          "Year/Period": "12/1999 - 2/2000",
          "Unemployment rate (seasonally adjusted) (%)": 5.9
        },
        {
          "Year/Period": "1/2000 - 3/2000",
          "Unemployment rate (seasonally adjusted) (%)": 5.6
        },
        {
          "Year/Period": "2/2000 - 4/2000",
          "Unemployment rate (seasonally adjusted) (%)": 5.3
        },
        {
          "Year/Period": "3/2000 - 5/2000",
          "Unemployment rate (seasonally adjusted) (%)": 5.1
        },
        {
          "Year/Period": "4/2000 - 6/2000",
          "Unemployment rate (seasonally adjusted) (%)": 5.1
        },
        {
          "Year/Period": "5/2000 - 7/2000",
          "Unemployment rate (seasonally adjusted) (%)": 5
        },
        {
          "Year/Period": "6/2000 - 8/2000",
          "Unemployment rate (seasonally adjusted) (%)": 4.9
        },
        {
          "Year/Period": "7/2000 - 9/2000",
          "Unemployment rate (seasonally adjusted) (%)": 4.8
        },
        {
          "Year/Period": "8/2000 - 10/2000",
          "Unemployment rate (seasonally adjusted) (%)": 4.7
        },
        {
          "Year/Period": "9/2000 - 11/2000",
          "Unemployment rate (seasonally adjusted) (%)": 4.5
        },
        {
          "Year/Period": "10/2000 - 12/2000",
          "Unemployment rate (seasonally adjusted) (%)": 4.4
        },
        {
          "Year/Period": "11/2000 - 1/2001",
          "Unemployment rate (seasonally adjusted) (%)": 4.4
        },
        {
          "Year/Period": "12/2000 - 2/2001",
          "Unemployment rate (seasonally adjusted) (%)": 4.5
        },
        {
          "Year/Period": "1/2001 - 3/2001",
          "Unemployment rate (seasonally adjusted) (%)": 4.5
        },
        {
          "Year/Period": "2/2001 - 4/2001",
          "Unemployment rate (seasonally adjusted) (%)": 4.5
        },
        {
          "Year/Period": "3/2001 - 5/2001",
          "Unemployment rate (seasonally adjusted) (%)": 4.5
        },
        {
          "Year/Period": "4/2001 - 6/2001",
          "Unemployment rate (seasonally adjusted) (%)": 4.5
        },
        {
          "Year/Period": "5/2001 - 7/2001",
          "Unemployment rate (seasonally adjusted) (%)": 4.5
        },
        {
          "Year/Period": "6/2001 - 8/2001",
          "Unemployment rate (seasonally adjusted) (%)": 4.8
        },
        {
          "Year/Period": "7/2001 - 9/2001",
          "Unemployment rate (seasonally adjusted) (%)": 5.2
        },
        {
          "Year/Period": "8/2001 - 10/2001",
          "Unemployment rate (seasonally adjusted) (%)": 5.5
        },
        {
          "Year/Period": "9/2001 - 11/2001",
          "Unemployment rate (seasonally adjusted) (%)": 6
        },
        {
          "Year/Period": "10/2001 - 12/2001",
          "Unemployment rate (seasonally adjusted) (%)": 6.3
        },
        {
          "Year/Period": "11/2001 - 1/2002",
          "Unemployment rate (seasonally adjusted) (%)": 6.7
        },
        {
          "Year/Period": "12/2001 - 2/2002",
          "Unemployment rate (seasonally adjusted) (%)": 6.8
        },
        {
          "Year/Period": "1/2002 - 3/2002",
          "Unemployment rate (seasonally adjusted) (%)": 7
        },
        {
          "Year/Period": "2/2002 - 4/2002",
          "Unemployment rate (seasonally adjusted) (%)": 7.1
        },
        {
          "Year/Period": "3/2002 - 5/2002",
          "Unemployment rate (seasonally adjusted) (%)": 7.3
        },
        {
          "Year/Period": "4/2002 - 6/2002",
          "Unemployment rate (seasonally adjusted) (%)": 7.5
        },
        {
          "Year/Period": "5/2002 - 7/2002",
          "Unemployment rate (seasonally adjusted) (%)": 7.5
        },
        {
          "Year/Period": "6/2002 - 8/2002",
          "Unemployment rate (seasonally adjusted) (%)": 7.4
        },
        {
          "Year/Period": "7/2002 - 9/2002",
          "Unemployment rate (seasonally adjusted) (%)": 7.3
        },
        {
          "Year/Period": "8/2002 - 10/2002",
          "Unemployment rate (seasonally adjusted) (%)": 7.3
        },
        {
          "Year/Period": "9/2002 - 11/2002",
          "Unemployment rate (seasonally adjusted) (%)": 7.3
        },
        {
          "Year/Period": "10/2002 - 12/2002",
          "Unemployment rate (seasonally adjusted) (%)": 7.4
        },
        {
          "Year/Period": "11/2002 - 1/2003",
          "Unemployment rate (seasonally adjusted) (%)": 7.4
        },
        {
          "Year/Period": "12/2002 - 2/2003",
          "Unemployment rate (seasonally adjusted) (%)": 7.6
        },
        {
          "Year/Period": "1/2003 - 3/2003",
          "Unemployment rate (seasonally adjusted) (%)": 7.5
        },
        {
          "Year/Period": "2/2003 - 4/2003",
          "Unemployment rate (seasonally adjusted) (%)": 7.8
        },
        {
          "Year/Period": "3/2003 - 5/2003",
          "Unemployment rate (seasonally adjusted) (%)": 8.2
        },
        {
          "Year/Period": "4/2003 - 6/2003",
          "Unemployment rate (seasonally adjusted) (%)": 8.5
        },
        {
          "Year/Period": "5/2003 - 7/2003",
          "Unemployment rate (seasonally adjusted) (%)": 8.4
        },
        {
          "Year/Period": "6/2003 - 8/2003",
          "Unemployment rate (seasonally adjusted) (%)": 8.4
        },
        {
          "Year/Period": "7/2003 - 9/2003",
          "Unemployment rate (seasonally adjusted) (%)": 8.2
        },
        {
          "Year/Period": "8/2003 - 10/2003",
          "Unemployment rate (seasonally adjusted) (%)": 8
        },
        {
          "Year/Period": "9/2003 - 11/2003",
          "Unemployment rate (seasonally adjusted) (%)": 7.6
        },
        {
          "Year/Period": "10/2003 - 12/2003",
          "Unemployment rate (seasonally adjusted) (%)": 7.5
        },
        {
          "Year/Period": "11/2003 - 1/2004",
          "Unemployment rate (seasonally adjusted) (%)": 7.5
        },
        {
          "Year/Period": "12/2003 - 2/2004",
          "Unemployment rate (seasonally adjusted) (%)": 7.3
        },
        {
          "Year/Period": "1/2004 - 3/2004",
          "Unemployment rate (seasonally adjusted) (%)": 7.2
        },
        {
          "Year/Period": "2/2004 - 4/2004",
          "Unemployment rate (seasonally adjusted) (%)": 7.1
        },
        {
          "Year/Period": "3/2004 - 5/2004",
          "Unemployment rate (seasonally adjusted) (%)": 6.9
        },
        {
          "Year/Period": "4/2004 - 6/2004",
          "Unemployment rate (seasonally adjusted) (%)": 6.7
        },
        {
          "Year/Period": "5/2004 - 7/2004",
          "Unemployment rate (seasonally adjusted) (%)": 6.6
        },
        {
          "Year/Period": "6/2004 - 8/2004",
          "Unemployment rate (seasonally adjusted) (%)": 6.6
        },
        {
          "Year/Period": "7/2004 - 9/2004",
          "Unemployment rate (seasonally adjusted) (%)": 6.7
        },
        {
          "Year/Period": "8/2004 - 10/2004",
          "Unemployment rate (seasonally adjusted) (%)": 6.7
        },
        {
          "Year/Period": "9/2004 - 11/2004",
          "Unemployment rate (seasonally adjusted) (%)": 6.7
        },
        {
          "Year/Period": "10/2004 - 12/2004",
          "Unemployment rate (seasonally adjusted) (%)": 6.6
        },
        {
          "Year/Period": "11/2004 - 1/2005",
          "Unemployment rate (seasonally adjusted) (%)": 6.4
        },
        {
          "Year/Period": "12/2004 - 2/2005",
          "Unemployment rate (seasonally adjusted) (%)": 6.1
        },
        {
          "Year/Period": "1/2005 - 3/2005",
          "Unemployment rate (seasonally adjusted) (%)": 6
        },
        {
          "Year/Period": "2/2005 - 4/2005",
          "Unemployment rate (seasonally adjusted) (%)": 5.9
        },
        {
          "Year/Period": "3/2005 - 5/2005",
          "Unemployment rate (seasonally adjusted) (%)": 5.7
        },
        {
          "Year/Period": "4/2005 - 6/2005",
          "Unemployment rate (seasonally adjusted) (%)": 5.7
        },
        {
          "Year/Period": "5/2005 - 7/2005",
          "Unemployment rate (seasonally adjusted) (%)": 5.7
        },
        {
          "Year/Period": "6/2005 - 8/2005",
          "Unemployment rate (seasonally adjusted) (%)": 5.6
        },
        {
          "Year/Period": "7/2005 - 9/2005",
          "Unemployment rate (seasonally adjusted) (%)": 5.4
        },
        {
          "Year/Period": "8/2005 - 10/2005",
          "Unemployment rate (seasonally adjusted) (%)": 5.3
        },
        {
          "Year/Period": "9/2005 - 11/2005",
          "Unemployment rate (seasonally adjusted) (%)": 5.4
        },
        {
          "Year/Period": "10/2005 - 12/2005",
          "Unemployment rate (seasonally adjusted) (%)": 5.2
        },
        {
          "Year/Period": "11/2005 - 1/2006",
          "Unemployment rate (seasonally adjusted) (%)": 5.2
        },
        {
          "Year/Period": "12/2005 - 2/2006",
          "Unemployment rate (seasonally adjusted) (%)": 5.1
        },
        {
          "Year/Period": "1/2006 - 3/2006",
          "Unemployment rate (seasonally adjusted) (%)": 5.1
        },
        {
          "Year/Period": "2/2006 - 4/2006",
          "Unemployment rate (seasonally adjusted) (%)": 5
        },
        {
          "Year/Period": "3/2006 - 5/2006",
          "Unemployment rate (seasonally adjusted) (%)": 4.9
        },
        {
          "Year/Period": "4/2006 - 6/2006",
          "Unemployment rate (seasonally adjusted) (%)": 4.9
        },
        {
          "Year/Period": "5/2006 - 7/2006",
          "Unemployment rate (seasonally adjusted) (%)": 4.9
        },
        {
          "Year/Period": "6/2006 - 8/2006",
          "Unemployment rate (seasonally adjusted) (%)": 4.8
        },
        {
          "Year/Period": "7/2006 - 9/2006",
          "Unemployment rate (seasonally adjusted) (%)": 4.6
        },
        {
          "Year/Period": "8/2006 - 10/2006",
          "Unemployment rate (seasonally adjusted) (%)": 4.6
        },
        {
          "Year/Period": "9/2006 - 11/2006",
          "Unemployment rate (seasonally adjusted) (%)": 4.5
        },
        {
          "Year/Period": "10/2006 - 12/2006",
          "Unemployment rate (seasonally adjusted) (%)": 4.5
        },
        {
          "Year/Period": "11/2006 - 1/2007",
          "Unemployment rate (seasonally adjusted) (%)": 4.5
        },
        {
          "Year/Period": "12/2006 - 2/2007",
          "Unemployment rate (seasonally adjusted) (%)": 4.3
        },
        {
          "Year/Period": "1/2007 - 3/2007",
          "Unemployment rate (seasonally adjusted) (%)": 4.3
        },
        {
          "Year/Period": "2/2007 - 4/2007",
          "Unemployment rate (seasonally adjusted) (%)": 4.3
        },
        {
          "Year/Period": "3/2007 - 5/2007",
          "Unemployment rate (seasonally adjusted) (%)": 4.3
        },
        {
          "Year/Period": "4/2007 - 6/2007",
          "Unemployment rate (seasonally adjusted) (%)": 4.2
        },
        {
          "Year/Period": "5/2007 - 7/2007",
          "Unemployment rate (seasonally adjusted) (%)": 4.1
        },
        {
          "Year/Period": "6/2007 - 8/2007",
          "Unemployment rate (seasonally adjusted) (%)": 4.2
        },
        {
          "Year/Period": "7/2007 - 9/2007",
          "Unemployment rate (seasonally adjusted) (%)": 4.1
        },
        {
          "Year/Period": "8/2007 - 10/2007",
          "Unemployment rate (seasonally adjusted) (%)": 4
        },
        {
          "Year/Period": "9/2007 - 11/2007",
          "Unemployment rate (seasonally adjusted) (%)": 3.7
        },
        {
          "Year/Period": "10/2007 - 12/2007",
          "Unemployment rate (seasonally adjusted) (%)": 3.4
        },
        {
          "Year/Period": "11/2007 - 1/2008",
          "Unemployment rate (seasonally adjusted) (%)": 3.4
        },
        {
          "Year/Period": "12/2007 - 2/2008",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "1/2008 - 3/2008",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "2/2008 - 4/2008",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "3/2008 - 5/2008",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "4/2008 - 6/2008",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "5/2008 - 7/2008",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "6/2008 - 8/2008",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "7/2008 - 9/2008",
          "Unemployment rate (seasonally adjusted) (%)": 3.5
        },
        {
          "Year/Period": "8/2008 - 10/2008",
          "Unemployment rate (seasonally adjusted) (%)": 3.6
        },
        {
          "Year/Period": "9/2008 - 11/2008",
          "Unemployment rate (seasonally adjusted) (%)": 3.9
        },
        {
          "Year/Period": "10/2008 - 12/2008",
          "Unemployment rate (seasonally adjusted) (%)": 4.1
        },
        {
          "Year/Period": "11/2008 - 1/2009",
          "Unemployment rate (seasonally adjusted) (%)": 4.6
        },
        {
          "Year/Period": "12/2008 - 2/2009",
          "Unemployment rate (seasonally adjusted) (%)": 5.1
        },
        {
          "Year/Period": "1/2009 - 3/2009",
          "Unemployment rate (seasonally adjusted) (%)": 5.2
        },
        {
          "Year/Period": "2/2009 - 4/2009",
          "Unemployment rate (seasonally adjusted) (%)": 5.3
        },
        {
          "Year/Period": "3/2009 - 5/2009",
          "Unemployment rate (seasonally adjusted) (%)": 5.3
        },
        {
          "Year/Period": "4/2009 - 6/2009",
          "Unemployment rate (seasonally adjusted) (%)": 5.3
        },
        {
          "Year/Period": "5/2009 - 7/2009",
          "Unemployment rate (seasonally adjusted) (%)": 5.4
        },
        {
          "Year/Period": "6/2009 - 8/2009",
          "Unemployment rate (seasonally adjusted) (%)": 5.5
        },
        {
          "Year/Period": "7/2009 - 9/2009",
          "Unemployment rate (seasonally adjusted) (%)": 5.4
        },
        {
          "Year/Period": "8/2009 - 10/2009",
          "Unemployment rate (seasonally adjusted) (%)": 5.2
        },
        {
          "Year/Period": "9/2009 - 11/2009",
          "Unemployment rate (seasonally adjusted) (%)": 5.1
        },
        {
          "Year/Period": "10/2009 - 12/2009",
          "Unemployment rate (seasonally adjusted) (%)": 5
        },
        {
          "Year/Period": "11/2009 - 1/2010",
          "Unemployment rate (seasonally adjusted) (%)": 4.9
        },
        {
          "Year/Period": "12/2009 - 2/2010",
          "Unemployment rate (seasonally adjusted) (%)": 4.7
        },
        {
          "Year/Period": "1/2010 - 3/2010",
          "Unemployment rate (seasonally adjusted) (%)": 4.6
        },
        {
          "Year/Period": "2/2010 - 4/2010",
          "Unemployment rate (seasonally adjusted) (%)": 4.5
        },
        {
          "Year/Period": "3/2010 - 5/2010",
          "Unemployment rate (seasonally adjusted) (%)": 4.6
        },
        {
          "Year/Period": "4/2010 - 6/2010",
          "Unemployment rate (seasonally adjusted) (%)": 4.6
        },
        {
          "Year/Period": "5/2010 - 7/2010",
          "Unemployment rate (seasonally adjusted) (%)": 4.3
        },
        {
          "Year/Period": "6/2010 - 8/2010",
          "Unemployment rate (seasonally adjusted) (%)": 4.3
        },
        {
          "Year/Period": "7/2010 - 9/2010",
          "Unemployment rate (seasonally adjusted) (%)": 4.2
        },
        {
          "Year/Period": "8/2010 - 10/2010",
          "Unemployment rate (seasonally adjusted) (%)": 4.2
        },
        {
          "Year/Period": "9/2010 - 11/2010",
          "Unemployment rate (seasonally adjusted) (%)": 4
        },
        {
          "Year/Period": "10/2010 - 12/2010",
          "Unemployment rate (seasonally adjusted) (%)": 3.9
        },
        {
          "Year/Period": "11/2010 - 1/2011",
          "Unemployment rate (seasonally adjusted) (%)": 3.8
        },
        {
          "Year/Period": "12/2010 - 2/2011",
          "Unemployment rate (seasonally adjusted) (%)": 3.6
        },
        {
          "Year/Period": "1/2011 - 3/2011",
          "Unemployment rate (seasonally adjusted) (%)": 3.5
        },
        {
          "Year/Period": "2/2011 - 4/2011",
          "Unemployment rate (seasonally adjusted) (%)": 3.6
        },
        {
          "Year/Period": "3/2011 - 5/2011",
          "Unemployment rate (seasonally adjusted) (%)": 3.6
        },
        {
          "Year/Period": "4/2011 - 6/2011",
          "Unemployment rate (seasonally adjusted) (%)": 3.6
        },
        {
          "Year/Period": "5/2011 - 7/2011",
          "Unemployment rate (seasonally adjusted) (%)": 3.5
        },
        {
          "Year/Period": "6/2011 - 8/2011",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "7/2011 - 9/2011",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "8/2011 - 10/2011",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "9/2011 - 11/2011",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "10/2011 - 12/2011",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "11/2011 - 1/2012",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "12/2011 - 2/2012",
          "Unemployment rate (seasonally adjusted) (%)": 3.4
        },
        {
          "Year/Period": "1/2012 - 3/2012",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "2/2012 - 4/2012",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "3/2012 - 5/2012",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "4/2012 - 6/2012",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "5/2012 - 7/2012",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "6/2012 - 8/2012",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "7/2012 - 9/2012",
          "Unemployment rate (seasonally adjusted) (%)": 3.4
        },
        {
          "Year/Period": "8/2012 - 10/2012",
          "Unemployment rate (seasonally adjusted) (%)": 3.4
        },
        {
          "Year/Period": "9/2012 - 11/2012",
          "Unemployment rate (seasonally adjusted) (%)": 3.4
        },
        {
          "Year/Period": "10/2012 - 12/2012",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "11/2012 - 1/2013",
          "Unemployment rate (seasonally adjusted) (%)": 3.5
        },
        {
          "Year/Period": "12/2012 - 2/2013",
          "Unemployment rate (seasonally adjusted) (%)": 3.5
        },
        {
          "Year/Period": "1/2013 - 3/2013",
          "Unemployment rate (seasonally adjusted) (%)": 3.5
        },
        {
          "Year/Period": "2/2013 - 4/2013",
          "Unemployment rate (seasonally adjusted) (%)": 3.5
        },
        {
          "Year/Period": "3/2013 - 5/2013",
          "Unemployment rate (seasonally adjusted) (%)": 3.5
        },
        {
          "Year/Period": "4/2013 - 6/2013",
          "Unemployment rate (seasonally adjusted) (%)": 3.4
        },
        {
          "Year/Period": "5/2013 - 7/2013",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "6/2013 - 8/2013",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "7/2013 - 9/2013",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "8/2013 - 10/2013",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "9/2013 - 11/2013",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "10/2013 - 12/2013",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "11/2013 - 1/2014",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "12/2013 - 2/2014",
          "Unemployment rate (seasonally adjusted) (%)": 3.1
        },
        {
          "Year/Period": "1/2014 - 3/2014",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "2/2014 - 4/2014",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "3/2014 - 5/2014",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "4/2014 - 6/2014",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "5/2014 - 7/2014",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "6/2014 - 8/2014",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "7/2014 - 9/2014",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "8/2014 - 10/2014",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "9/2014 - 11/2014",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "10/2014 - 12/2014",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "11/2014 - 1/2015",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "12/2014 - 2/2015",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "1/2015 - 3/2015",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "2/2015 - 4/2015",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "3/2015 - 5/2015",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "4/2015 - 6/2015",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "5/2015 - 7/2015",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "6/2015 - 8/2015",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "7/2015 - 9/2015",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "8/2015 - 10/2015",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "9/2015 - 11/2015",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "10/2015 - 12/2015",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "11/2015 - 1/2016",
          "Unemployment rate (seasonally adjusted) (%)": 3.4
        },
        {
          "Year/Period": "12/2015 - 2/2016",
          "Unemployment rate (seasonally adjusted) (%)": 3.4
        },
        {
          "Year/Period": "1/2016 - 3/2016",
          "Unemployment rate (seasonally adjusted) (%)": 3.4
        },
        {
          "Year/Period": "2/2016 - 4/2016",
          "Unemployment rate (seasonally adjusted) (%)": 3.4
        },
        {
          "Year/Period": "3/2016 - 5/2016",
          "Unemployment rate (seasonally adjusted) (%)": 3.4
        },
        {
          "Year/Period": "4/2016 - 6/2016",
          "Unemployment rate (seasonally adjusted) (%)": 3.4
        },
        {
          "Year/Period": "5/2016 - 7/2016",
          "Unemployment rate (seasonally adjusted) (%)": 3.4
        },
        {
          "Year/Period": "6/2016 - 8/2016",
          "Unemployment rate (seasonally adjusted) (%)": 3.4
        },
        {
          "Year/Period": "7/2016 - 9/2016",
          "Unemployment rate (seasonally adjusted) (%)": 3.4
        },
        {
          "Year/Period": "8/2016 - 10/2016",
          "Unemployment rate (seasonally adjusted) (%)": 3.4
        },
        {
          "Year/Period": "9/2016 - 11/2016",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "10/2016 - 12/2016",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "11/2016 - 1/2017",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "12/2016 - 2/2017",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "1/2017 - 3/2017",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "2/2017 - 4/2017",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "3/2017 - 5/2017",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "4/2017 - 6/2017",
          "Unemployment rate (seasonally adjusted) (%)": 3.1
        },
        {
          "Year/Period": "5/2017 - 7/2017",
          "Unemployment rate (seasonally adjusted) (%)": 3.2
        },
        {
          "Year/Period": "6/2017 - 8/2017",
          "Unemployment rate (seasonally adjusted) (%)": 3.1
        },
        {
          "Year/Period": "7/2017 - 9/2017",
          "Unemployment rate (seasonally adjusted) (%)": 3.1
        },
        {
          "Year/Period": "8/2017 - 10/2017",
          "Unemployment rate (seasonally adjusted) (%)": 3
        },
        {
          "Year/Period": "9/2017 - 11/2017",
          "Unemployment rate (seasonally adjusted) (%)": 3
        },
        {
          "Year/Period": "10/2017 - 12/2017",
          "Unemployment rate (seasonally adjusted) (%)": 2.9
        },
        {
          "Year/Period": "11/2017 - 1/2018",
          "Unemployment rate (seasonally adjusted) (%)": 2.9
        },
        {
          "Year/Period": "12/2017 - 2/2018",
          "Unemployment rate (seasonally adjusted) (%)": 2.9
        },
        {
          "Year/Period": "1/2018 - 3/2018",
          "Unemployment rate (seasonally adjusted) (%)": 2.8
        },
        {
          "Year/Period": "2/2018 - 4/2018",
          "Unemployment rate (seasonally adjusted) (%)": 2.8
        },
        {
          "Year/Period": "3/2018 - 5/2018",
          "Unemployment rate (seasonally adjusted) (%)": 2.8
        },
        {
          "Year/Period": "4/2018 - 6/2018",
          "Unemployment rate (seasonally adjusted) (%)": 2.8
        },
        {
          "Year/Period": "5/2018 - 7/2018",
          "Unemployment rate (seasonally adjusted) (%)": 2.8
        },
        {
          "Year/Period": "6/2018 - 8/2018",
          "Unemployment rate (seasonally adjusted) (%)": 2.8
        },
        {
          "Year/Period": "7/2018 - 9/2018",
          "Unemployment rate (seasonally adjusted) (%)": 2.8
        },
        {
          "Year/Period": "8/2018 - 10/2018",
          "Unemployment rate (seasonally adjusted) (%)": 2.8
        },
        {
          "Year/Period": "9/2018 - 11/2018",
          "Unemployment rate (seasonally adjusted) (%)": 2.8
        },
        {
          "Year/Period": "10/2018 - 12/2018",
          "Unemployment rate (seasonally adjusted) (%)": 2.8
        },
        {
          "Year/Period": "11/2018 - 1/2019",
          "Unemployment rate (seasonally adjusted) (%)": 2.8
        },
        {
          "Year/Period": "12/2018 - 2/2019",
          "Unemployment rate (seasonally adjusted) (%)": 2.8
        },
        {
          "Year/Period": "1/2019 - 3/2019",
          "Unemployment rate (seasonally adjusted) (%)": 2.8
        },
        {
          "Year/Period": "2/2019 - 4/2019",
          "Unemployment rate (seasonally adjusted) (%)": 2.8
        },
        {
          "Year/Period": "3/2019 - 5/2019",
          "Unemployment rate (seasonally adjusted) (%)": 2.8
        },
        {
          "Year/Period": "4/2019 - 6/2019",
          "Unemployment rate (seasonally adjusted) (%)": 2.8
        },
        {
          "Year/Period": "5/2019 - 7/2019",
          "Unemployment rate (seasonally adjusted) (%)": 2.8
        },
        {
          "Year/Period": "6/2019 - 8/2019",
          "Unemployment rate (seasonally adjusted) (%)": 2.9
        },
        {
          "Year/Period": "7/2019 - 9/2019",
          "Unemployment rate (seasonally adjusted) (%)": 2.9
        },
        {
          "Year/Period": "8/2019 - 10/2019",
          "Unemployment rate (seasonally adjusted) (%)": 3
        },
        {
          "Year/Period": "9/2019 - 11/2019",
          "Unemployment rate (seasonally adjusted) (%)": 3.1
        },
        {
          "Year/Period": "10/2019 - 12/2019",
          "Unemployment rate (seasonally adjusted) (%)": 3.3
        },
        {
          "Year/Period": "11/2019 - 1/2020",
          "Unemployment rate (seasonally adjusted) (%)": 3.4
        },
        {
          "Year/Period": "12/2019 - 2/2020",
          "Unemployment rate (seasonally adjusted) (%)": 3.8
        },
        {
          "Year/Period": "1/2020 - 3/2020",
          "Unemployment rate (seasonally adjusted) (%)": 4.3
        },
        {
          "Year/Period": "2/2020 - 4/2020",
          "Unemployment rate (seasonally adjusted) (%)": 5.2
        },
        {
          "Year/Period": "3/2020 - 5/2020",
          "Unemployment rate (seasonally adjusted) (%)": 5.9
        },
        {
          "Year/Period": "4/2020 - 6/2020",
          "Unemployment rate (seasonally adjusted) (%)": 6.1
        },
        {
          "Year/Period": "5/2020 - 7/2020",
          "Unemployment rate (seasonally adjusted) (%)": 6
        },
        {
          "Year/Period": "6/2020 - 8/2020",
          "Unemployment rate (seasonally adjusted) (%)": 6.1
        },
        {
          "Year/Period": "7/2020 - 9/2020",
          "Unemployment rate (seasonally adjusted) (%)": 6.2
        },
        {
          "Year/Period": "8/2020 - 10/2020",
          "Unemployment rate (seasonally adjusted) (%)": 6.3
        },
        {
          "Year/Period": "9/2020 - 11/2020",
          "Unemployment rate (seasonally adjusted) (%)": 6.2
        },
        {
          "Year/Period": "10/2020 - 12/2020",
          "Unemployment rate (seasonally adjusted) (%)": 6.6
        },
        {
          "Year/Period": "11/2020 - 1/2021",
          "Unemployment rate (seasonally adjusted) (%)": 7
        },
        {
          "Year/Period": "12/2020 - 2/2021",
          "Unemployment rate (seasonally adjusted) (%)": 7.2
        },
        {
          "Year/Period": "1/2021 - 3/2021",
          "Unemployment rate (seasonally adjusted) (%)": 6.8
        },
        {
          "Year/Period": "2/2021 - 4/2021",
          "Unemployment rate (seasonally adjusted) (%)": 6.4
        },
        {
          "Year/Period": "3/2021 - 5/2021",
          "Unemployment rate (seasonally adjusted) (%)": 6
        },
        {
          "Year/Period": "4/2021 - 6/2021",
          "Unemployment rate (seasonally adjusted) (%)": 5.4
        },
        {
          "Year/Period": "5/2021 - 7/2021",
          "Unemployment rate (seasonally adjusted) (%)": 4.9
        },
        {
          "Year/Period": "6/2021 - 8/2021",
          "Unemployment rate (seasonally adjusted) (%)": 4.6
        },
        {
          "Year/Period": "7/2021 - 9/2021",
          "Unemployment rate (seasonally adjusted) (%)": 4.5
        },
        {
          "Year/Period": "8/2021 - 10/2021",
          "Unemployment rate (seasonally adjusted) (%)": 4.3
        },
        {
          "Year/Period": "9/2021 - 11/2021",
          "Unemployment rate (seasonally adjusted) (%)": 4.2
        },
        {
          "Year/Period": "10/2021 - 12/2021",
          "Unemployment rate (seasonally adjusted) (%)": 4
        },
        {
          "Year/Period": "11/2021 - 1/2022",
          "Unemployment rate (seasonally adjusted) (%)": 3.9
        },
        {
          "Year/Period": "12/2021 - 2/2022",
          "Unemployment rate (seasonally adjusted) (%)": 4.5
        },
        {
          "Year/Period": "1/2022 - 3/2022",
          "Unemployment rate (seasonally adjusted) (%)": 5
        },
        {
          "Year/Period": "2/2022 - 4/2022",
          "Unemployment rate (seasonally adjusted) (%)": 5.4
        },
        {
          "Year/Period": "3/2022 - 5/2022",
          "Unemployment rate (seasonally adjusted) (%)": 5.1
        },
        {
          "Year/Period": "4/2022 - 6/2022",
          "Unemployment rate (seasonally adjusted) (%)": 4.7
        },
        {
          "Year/Period": "5/2022 - 7/2022",
          "Unemployment rate (seasonally adjusted) (%)": 4.3
        },
        {
          "Year/Period": "6/2022 - 8/2022",
          "Unemployment rate (seasonally adjusted) (%)": 4.1
        },
        {
          "Year/Period": "7/2022 - 9/2022",
          "Unemployment rate (seasonally adjusted) (%)": 3.9
        }
    ];
  
      chart.data.forEach(function (o) {
      
        o.Category = "" + o.Category;
        o["Unemployment rate (seasonally adjusted) (%)"] = o["Unemployment rate (seasonally adjusted) (%)"] || undefined;
    });
  
    chart.events.on("ready", function () {
      dateAxis.zoom({ start: 0, end: 1 });
    });
    
    // Set input format for the dates
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
    
    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  
    [
    "Unemployment rate (seasonally adjusted) (%)"
    ].forEach(function (elem) {

  
    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = elem;
    series.tooltipText = elem + ": {valueY}"
    series.dataFields.dateX = "Year/Period";
    series.strokeWidth = 2;
    series.minBulletDistance = 15;

    // Drop-shaped tooltips
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = "middle";
    series.tooltip.label.textValign = "middle";

    // Make bullets grow on hover
    var bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color("#fff");

    var bullethover = bullet.states.create("hover");
    bullethover.properties.scale = 1.3;

    // Make a panning cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.maxTooltipDistance = 500;
    chart.cursor.behavior = "panXY";
    chart.cursor.xAxis = valueAxis;
    //chart.cursor.snapToSeries = series;

    series.legendSettings.valueText = elem;
    
    // Create vertical scrollbar and place it before the value axis
    chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarY.parent = chart.leftAxesContainer;
    chart.scrollbarY.toBack();
    
    // Create a horizontal scrollbar with previe and place it underneath the date axis
    //chart.scrollbarX.series.push(series);
    //chart.scrollbarX.parent = chart.bottomAxesContainer;
    chart.scrollbarX = new am4charts.XYChartScrollbar();
    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.parent = chart.bottomAxesContainer;
  
    valueAxis.cursorTooltipEnabled = false;

    chart.zoomOutButton.background.fill = am4core.color("#F8D9D6");
    chart.zoomOutButton.icon.stroke = am4core.color("#fff");
    chart.zoomOutButton.icon.strokeWidth = 2;
    chart.zoomOutButton.background.states.getKey("hover").properties.fill = am4core.color("#f7b6b0");
    chart.zoomOutButton.background.states.getKey("down").properties.fill = am4core.color("#f7b6b0");
    
    dateAxis.start = 0;
    dateAxis.keepSelection = true;
    
    });
      
    chart.legend = new am4charts.Legend();

    var title = chart.titles.create();
    title.text = "Consumer Price Indices";
    title.align = "center"
    title.fill = '#6c757d'
    title.paddingBottom = 10;
    title.fontWeight = 600;
    title.fontSize = 20;
    title.marginTop = 10;
    title.marginBottom = 10;
    
    }); // end am4core.ready()