Here are answers to your SQL, Python, Excel, Power BI, and Tableau questions:

### SQL

1. **How do you write a query to find duplicate rows in a table?**
   ```sql
   SELECT column1, column2, COUNT(*)
   FROM table_name
   GROUP BY column1, column2
   HAVING COUNT(*) > 1;
   ```

2. **How would you perform a left join and filter out nulls in SQL?**
   ```sql
   SELECT a.*, b.*
   FROM table_a a
   LEFT JOIN table_b b ON a.id = b.id
   WHERE b.id IS NOT NULL;
   ```

3. **What is a window function in SQL, and how do you use it for ranking data?**
   A window function performs calculations across a set of table rows that are somehow related to the current row. For example, to rank data:
   ```sql
   SELECT id, score,
          RANK() OVER (ORDER BY score DESC) AS rank
   FROM table_name;
   ```

4. **How do you calculate the cumulative sum for a column in SQL?**
   ```sql
   SELECT id, value,
          SUM(value) OVER (ORDER BY id) AS cumulative_sum
   FROM table_name;
   ```

5. **What is the difference between UNION and UNION ALL in SQL?**
   - `UNION` combines the result sets of two or more queries and removes duplicates.
   - `UNION ALL` combines the result sets and includes all duplicates.

---

### Python

1. **How do you import a CSV file into a pandas DataFrame, and how would you handle missing data?**
   ```python
   import pandas as pd
   
   df = pd.read_csv('file.csv')
   df.fillna(value=0, inplace=True)  # or df.dropna(inplace=True) to drop missing rows
   ```

2. **How do you use list comprehensions to filter and transform data in Python?**
   ```python
   numbers = [1, 2, 3, 4, 5]
   squares = [x**2 for x in numbers if x % 2 == 0]  # Squares of even numbers
   ```

3. **What are the differences between the `apply()` and `map()` functions in pandas?**
   - `apply()` can be used on DataFrames and Series and can apply functions along rows or columns.
   - `map()` is specifically for Series and is generally used for element-wise operations.

4. **How do you visualize data using matplotlib or seaborn in Python?**
   ```python
   import matplotlib.pyplot as plt
   import seaborn as sns

   sns.set(style="whitegrid")
   sns.barplot(x='category', y='value', data=df)
   plt.show()
   ```

5. **How do you write a function to calculate the correlation between two numerical columns in a pandas DataFrame?**
   ```python
   def calculate_correlation(df, col1, col2):
       return df[col1].corr(df[col2])
   ```

---

### Excel

1. **How would you use VLOOKUP or XLOOKUP to merge data between two Excel sheets?**
   - **VLOOKUP:**
     ```excel
     =VLOOKUP(A2, Sheet2!A:B, 2, FALSE)
     ```
   - **XLOOKUP:**
     ```excel
     =XLOOKUP(A2, Sheet2!A:A, Sheet2!B:B, "Not Found")
     ```

2. **What is the difference between absolute and relative cell references, and when would you use each?**
   - **Relative reference (A1)** changes when the formula is copied to another cell.
   - **Absolute reference ($A$1)** remains constant regardless of where the formula is copied. Use absolute references when you want to lock the cell reference.

3. **How do you create a pivot table, and what types of data analysis can you perform with it?**
   - Select your data range, go to the **Insert** tab, and select **PivotTable**. You can perform aggregations, group data, and create summaries for analysis.

4. **How would you use conditional formatting to highlight cells that meet certain criteria?**
   - Select the range, go to the **Home** tab, click **Conditional Formatting**, and choose your criteria (e.g., greater than, equal to, etc.) to apply formatting.

5. **How do you use the IF, AND, and OR functions together to create complex logical tests?**
   ```excel
   =IF(AND(A1 > 10, B1 < 5), "Yes", "No")
   ```

---

### Power BI

1. **How would you create and customize a calculated column in Power BI?**
   In Power BI Desktop, go to the **Data** view, select your table, and click **New Column**. Use DAX to define your calculation, e.g., `NewColumn = [ColumnA] + [ColumnB]`.

2. **What is the difference between a slicer and a filter in Power BI, and when would you use each?**
   - A **slicer** allows users to visually filter data directly in the report view.
   - A **filter** is applied at the report, page, or visual level and is not interactive for users.

3. **How do you create relationships between tables in Power BI, and how do they impact your data model?**
   In the **Model** view, drag a line between fields in different tables to create a relationship. Relationships affect how data is related and how queries aggregate information from multiple tables.

4. **How would you set up row-level security (RLS) to control access to sensitive data in Power BI?**
   Define roles and rules in the **Modeling** tab by creating DAX expressions that filter data based on user identity or roles.

5. **What is the purpose of DAX functions like CALCULATE and FILTER, and how do you use them?**
   - `CALCULATE` modifies filter context and performs calculations, e.g., `CALCULATE(SUM(Sales[Amount]), Sales[Region] = "East")`.
   - `FILTER` returns a table that is filtered based on a condition, e.g., `FILTER(Sales, Sales[Amount] > 100)`.

---

### Tableau

1. **How do you create a calculated field in Tableau, and what types of calculations can you perform?**
   Go to the **Analysis** menu, click on **Create Calculated Field**, and enter your formula (e.g., `SUM(Sales) / COUNT(DISTINCT Customer)` for average sales).

2. **What is a parameter in Tableau, and how can it be used to create interactive dashboards?**
   A parameter allows users to input a value that can dynamically change a calculation, filter, or measure in a dashboard, enhancing interactivity.

3. **How do you use a dual-axis chart in Tableau to show multiple measures in the same view?**
   Drag a second measure to the opposite axis on the same chart, then select **Dual Axis** from the dropdown on the axis. Synchronize axes if needed.

4. **How would you optimize a Tableau dashboard for performance when working with large datasets?**
   - Limit the number of data points.
   - Use extracts instead of live connections.
   - Optimize calculations and avoid complex joins.

5. **How do you create a custom date filter in Tableau to allow users to select specific date ranges?**
   Drag a date field to the Filters shelf, select **Range of Dates**, and then add the filter to the dashboard as a filter control.

Feel free to ask if you need more details on any of these topics!