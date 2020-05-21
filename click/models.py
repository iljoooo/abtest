from django.db import models

class Target(models.Model):
    target_text = models.CharField(max_length=256)
    def __str__(self):
        return self.target_text

class Option(models.Model):
    target = models.ForeignKey(Target, on_delete=models.CASCADE)
    option_text = models.CharField(max_length=64)
    click = models.IntegerField(default=0)

    def __str__(self):
        return self.option_text
