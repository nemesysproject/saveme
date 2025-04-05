namespace SaveMe.Infrastructure.EF.Options;

public class DataBaseOptions
{
    public string DataBaseType { get; set; } = string.Empty;
    public string ConnectionString { get; set; } = string.Empty;
    public string PostgreSqlConnection { get; set; } = string.Empty;
}
